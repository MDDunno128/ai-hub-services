# Turn saved resale analyses into a review workbook

Use this optional offline adapter when your workflow needs one table of analyses and a second table of comparable-listing evidence. It reads a saved JSON file and writes two CSV files. It makes no network requests, needs no credentials or extra packages, and starts no Apify runs.

## Start with the free historical example

Download [resale-export.mjs](resale-export.mjs) and the [saved JSON example](resale-output.json) into the same local folder. With an existing Node.js installation, run:

```sh
node resale-export.mjs resale-output.json my-resale-export
```

Use a new output-folder name. The adapter refuses to overwrite an existing folder. Input may be a single analysis object or an array of analysis objects, such as a saved dataset JSON export. The adapter does not accept raw upstream listing data or an API response wrapper.

The historical example produces **one analysis row and 12 evidence rows**. The analysis was computed from **16 retained comps**; the Actor includes at most 12 evidence examples in its output. The adapter preserves both counts and adds a completeness warning. It cannot recover omitted records. Mixed used/refurbished conditions are also flagged.

- [Analysis CSV example](resale-analyses-example.csv)
- [Evidence CSV example](resale-evidence-example.csv)

These files reuse the September 22, 2026 owner validation. They are not a current valuation, customer purchase, or new paid test.

## Two tables, one review workflow

| File | How to use it |
| --- | --- |
| `analyses.csv` | One row per saved analysis, including query, original timestamp/currency, comp count, evidence-row count, price percentiles, quality warnings and caveats. |
| `evidence.csv` | One row per supplied comparable listing, retaining query, condition, price, date and source URL. Join it to the summary using `analysis_index`. |

The index is local to each export. Different queries, dates and currencies stay separate. No currency conversion, market-wide aggregation, profit forecast or buy recommendation is generated. Missing amounts remain blank rather than becoming zero; missing currency and timestamp are warned about. Spreadsheet formula prefixes in source text are escaped with an apostrophe, which can remain visible in some CSV readers.

Import the two files into your spreadsheet or data tool, select one analysis index, and inspect its evidence. Record your buying decision and actual costs separately using the [buying worksheet](RESALE-BUYING-WORKFLOW.md). Keep the original JSON for audit. The adapter preserves provided warnings but cannot establish that source listings are accurate or fully comparable.

Input is capped at 10 MiB, 5,000 analysis objects and 5,000 evidence rows per analysis. Malformed data fails instead of silently coercing unknown values into valid numbers. A failed filesystem write can leave a partial new output folder; inspect it and use a fresh folder name for another attempt.

## When the free eBay tool may be enough

[eBay Product Research is free to sellers](https://www.ebay.com/sellercenter/growth/ebay-research-tools). If its interface answers your question, you do not need this paid Actor just to research a price.

AI-Hub's experiment is a structured, source-linked output that can fit a repeat review or integration workflow. Apify also provides native dataset exports; this adapter is an optional way to split nested evidence into a separate table and keep counts and warnings visible. We have not established that this workflow is more accurate or saves a particular amount of time.

If you need a new analysis, the [existing Apify product](https://apify.com/mddunno128/resale-comp-intelligence) charges $0.25 per successful analysis plus separate source event fees capped at $0.10; platform/account charges can differ. Running that product is a separate paid action in your own account. The offline adapter itself never starts a run.

## Validation and feedback

Six local checks cover the real historical sample, CSV quoting/formula prefixes, missing values, separate currencies/analyses, malformed input and retained warnings. A command-line check produced the two example files without network access.

[Open a sanitized integration issue](https://github.com/MDDunno128/ai-hub-services/issues/new) with your expected table layout or a reproducible error. Do not post private inventory, customer data, account details or credentials. Paid customer delivery and settlement remain unverified.
