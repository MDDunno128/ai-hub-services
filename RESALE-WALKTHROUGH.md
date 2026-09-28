# eBay sold-comparison walkthrough

## The question

What does a small recent sold-listing sample show for **Sony WH-1000XM5**?

The saved input requests 20 records, a 30-day lookback, any condition and exclusion of Best Offers. The result was generated on **September 22, 2026 at 18:08 UTC**. This document reuses that completed validation and starts no new run.

## What the result shows

| Measure | Historical result |
| --- | --- |
| Received records | 20 |
| Retained comps | 16 |
| Evidence examples included | 12 of the 16 retained comps |
| Excluded product-identity mismatches | 3 |
| Excluded non-comparable record | 1 |
| 25th percentile | $113.11 |
| Median | $127.84 |
| 75th percentile | $147.30 |
| Observed sale dates | September 18–22, 2026 |

Read the [evidence](resale-output.json) before applying a number. The any-condition query includes used and refurbished products, so this is not a condition-adjusted appraisal. The sample is capped at 20 source records and does not measure market-wide demand.

The saved output includes at most 12 evidence examples, so four retained comps are not exposed here. You cannot independently reconstruct the full 16-comp distribution from those 12 rows. Treat the reported percentiles as the historical analysis result, and review the included listings and missing-evidence limit before using them.

## Review the example without starting a run

Open the [free offline review guide](RESALE-INTEGRATION.md) to inspect the [analysis CSV](resale-analyses-example.csv) and [evidence CSV](resale-evidence-example.csv). The guide also shows how to use the optional local adapter with the saved JSON; it needs no Apify credentials and starts no runs. The adapter preserves the 16-comp versus 12-evidence-row difference and adds a completeness warning; it cannot recover the four omitted comps.

Record your own decision and costs using the [buying worksheet](RESALE-BUYING-WORKFLOW.md). This historical example does not establish a current buying price or a customer transaction.

No buy price was supplied in the live validation, so it returned no profit estimate. In your own run, optional buy price, fee percentage and outbound shipping generate scenario calculations; taxes, labor, returns and repairs remain outside those assumptions.

## A 40-second demonstration

| Time | What to show | Narration |
| --- | --- | --- |
| 0–10 sec | Exact model and saved input | Start with a specific model and condition. This replay uses a historical any-condition query. |
| 10–20 sec | 16 retained comps; three price percentiles | The result summarizes 16 retained comps; 12 evidence examples are available for review. |
| 20–30 sec | Four exclusions and condition caveat | Matching filters removed three model mismatches and one non-comparable record. Review remaining condition differences yourself. |
| 30–40 sec | Product URL and clear price | Run your own query on Apify: $0.25 per analysis plus separate source fees capped at $0.10. |

The accompanying GIF is an evidence-based visual replay, not a recording of a customer purchase. No sales, time-saving or accuracy claims are inferred from the validation.

[Open the live product](https://apify.com/mddunno128/resale-comp-intelligence).
