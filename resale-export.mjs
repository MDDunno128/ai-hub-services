/** Offline saved-output adapter. No network, authentication, dependencies or paid runs. */
import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

export function csvCell(value) {
  if (value === null || value === undefined) return '""';
  let text = String(value);
  if (typeof value === 'string' && (/^[\t\r\n]/.test(text) || /^\s*[=+\-@]/.test(text))) text = "'" + text;
  return '"' + text.replaceAll('"', '""') + '"';
}
const csv = rows => rows.map(row => row.map(csvCell).join(',')).join('\r\n') + '\r\n';
function text(value, name) {
  if (value == null) return '';
  if (typeof value !== 'string') throw new Error(`${name} must be text or absent.`);
  return value;
}
function amount(value, name, integer = false) {
  if (value == null) return null;
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0 || (integer && !Number.isSafeInteger(value))) throw new Error(`${name} must be a nonnegative number or absent.`);
  return value;
}
export function exportSavedAnalyses(input) {
  const analyses = Array.isArray(input) ? input : [input];
  if (!analyses.length || analyses.length > 5000) throw new Error('Expected 1–5000 saved analysis objects.');
  const summaries = [['analysis_index','query','generated_at','currency','comp_count','evidence_rows','p25','median','p75','received_count','excluded_count','quality_warnings','methodology','caveat','demo_note']];
  const evidenceRows = [['analysis_index','query','generated_at','currency','title','condition','ended_at','analyzed_total_price','url']];
  for (const [index, item] of analyses.entries()) {
    if (!item || typeof item !== 'object' || Array.isArray(item) || typeof item.query !== 'string' || !Array.isArray(item.evidence)) throw new Error(`Analysis ${index + 1} must contain query text and an evidence array.`);
    if (item.evidence.length > 5000) throw new Error('Evidence array exceeds the offline adapter limit.');
    const price = item.price ?? {};
    const quality = item.quality ?? {};
    if (typeof price !== 'object' || Array.isArray(price) || typeof quality !== 'object' || Array.isArray(quality)) throw new Error('Price and quality must be objects when present.');
    const warnings = quality.warnings ?? [];
    if (!Array.isArray(warnings) || warnings.some(value => typeof value !== 'string')) throw new Error('Quality warnings must be an array of strings.');
    const notes = [...warnings];
    const generated = text(item.generatedAt, 'generatedAt');
    const currency = text(item.currency, 'currency');
    const count = amount(item.compCount, 'compCount', true);
    const conditions = new Set(item.evidence.map(row => text(row?.condition, 'condition')).filter(Boolean));
    if (conditions.size > 1) notes.push('Mixed evidence conditions; not a condition-adjusted valuation.');
    if (count !== null && count !== item.evidence.length) notes.push('Evidence row count differs from compCount; review source completeness.');
    if (!generated) notes.push('Generation timestamp missing; freshness unknown.');
    if (!currency) notes.push('Currency missing; do not assume USD.');
    if (item.evidence.some(row => !row?.condition)) notes.push('At least one evidence condition is missing.');
    summaries.push([index + 1, item.query, generated, currency, count, item.evidence.length,
      amount(price.p25, 'p25'), amount(price.median, 'median'), amount(price.p75, 'p75'),
      amount(quality.receivedCount, 'receivedCount', true), amount(quality.excludedCount, 'excludedCount', true),
      JSON.stringify(notes), text(item.methodology, 'methodology'), text(item.caveat, 'caveat'), text(item.demo_note, 'demo_note')]);
    for (const row of item.evidence) {
      if (!row || typeof row !== 'object' || Array.isArray(row)) throw new Error('Each evidence row must be an object.');
      evidenceRows.push([index + 1, item.query, generated, currency, text(row.title, 'title'), text(row.condition, 'condition'),
        text(row.endedAt, 'endedAt'), amount(row.analyzedTotalPrice, 'analyzedTotalPrice'), text(row.url, 'url')]);
    }
  }
  return { analyses: analyses.length, evidenceRows: evidenceRows.length - 1, summaryCsv: csv(summaries), evidenceCsv: csv(evidenceRows) };
}
export async function main(args) {
  if (args.length !== 2) throw new Error('Usage: node resale-export.mjs <saved-output.json> <new-output-folder>');
  const source = resolve(args[0]);
  if ((await stat(source)).size > 10 * 1024 * 1024) throw new Error('Input exceeds 10 MiB. Split the saved export first.');
  const result = exportSavedAnalyses(JSON.parse((await readFile(source, 'utf8')).replace(/^\uFEFF/, '')));
  const directory = resolve(args[1]);
  await mkdir(directory); // Existing folders fail: never overwrite a buyer's workbook or prior export.
  await writeFile(join(directory, 'analyses.csv'), result.summaryCsv, { flag: 'wx' });
  await writeFile(join(directory, 'evidence.csv'), result.evidenceCsv, { flag: 'wx' });
  console.log(JSON.stringify({ analyses: result.analyses, evidenceRows: result.evidenceRows, directory, networkRequests: 0 }));
}
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main(process.argv.slice(2)).catch(error => { console.error(error.message); process.exitCode = 1; });
}
