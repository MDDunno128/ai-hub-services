# Using sold comps for a resale buying decision

For buyers evaluating an exact electronics model before purchasing stock, the useful output is an auditable comparison set, not a promised resale price.

## Try the saved example first — no run required

Read the [historical Sony WH-1000XM5 output](resale-output.json) and [walkthrough](RESALE-WALKTHROUGH.md). It retained 16 of 20 records on September 22, 2026, with a $127.84 median. It mixes used and refurbished condition, is a small sample, and is not a current valuation.

## A repeatable buying worksheet

| Record | What to enter or verify |
| --- | --- |
| Exact product | Brand, full model, capacity/revision and included accessories |
| Condition | Separate comparable condition from broken, parts-only or refurbished inventory |
| Evidence | Links and exclusion/quality warnings from the saved result |
| Conservative scenario | A manually selected selling-price scenario justified by the actual comparable listings |
| All costs | Buy price, actual marketplace fees, shipping, repairs, packaging, returns allowance, taxes and labor |
| Decision | Your margin threshold and buy/pass decision, recorded separately from the tool output |

Illustrative arithmetic: a $110 selling-price scenario minus $70 purchase cost, $16.50 assumed fees, $8 shipping and $5 other costs leaves $10.50 before any omitted costs. These numbers are hypothetical; actual fees and costs vary. The Actor does not validate the business assumptions or guarantee a sale.

## Run your own query when ready

Use the [existing Apify product](https://apify.com/mddunno128/resale-comp-intelligence) in your own account. Start from the [validated input shape](resale-input.json), set your exact product/condition, review charges, then review every output warning before relying on the sample.

Price: $0.25 per successful analysis, plus separate source event charges capped at $0.10. Platform/account charges can differ. Fewer than five usable comps means no analysis charge, but source charges may still apply. Best Offer accepted prices are not recovered and are excluded by default.

For repeat workflows, record one row per exact model and condition; do not merge unrelated products or multiply a small sample into a market-wide demand estimate. No automated bulk purchasing or paid batch job is included.

If the result does not fit your workflow, [open a sanitized issue](https://github.com/MDDunno128/ai-hub-services/issues/new) with the product/model, expected decision, input and relevant warning. Please omit credentials and private account information.
