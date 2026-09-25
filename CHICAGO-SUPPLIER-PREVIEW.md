# Chicago construction supplier signals — research preview

For equipment-rental, materials, site-service and construction-supply teams that need a manageable list of projects to research.

**Free sample; no paid permit service is available yet.** This preview does not establish open bids, available work, customers or revenue.

## What the sample contains

Checked **2026-09-25T05:31:21.126Z** against the [City of Chicago Building Permits dataset](https://data.cityofchicago.org/Buildings/Building-Permits/ydr8-5enu). The source query covered issued permits in the preceding 30 days with reported costs of at least $100,000.

- 467 source records inspected; 99 signals matched commercial or multifamily scope keywords.
- Newest source issue date: **2026-09-23**, approximately 2.2 days before the check. This is source data availability, not a promise of real-time coverage.
- Source cap was not reached. Keyword filters still miss projects and can misclassify them.
- The initial baseline and immediate repeat produced no newly observed or changed signals. These counts are not customer counts.

[Download all 99 sanitized signals as JSON](chicago-supplier-sample.json).

## Eight example signals

| Official permit | Issue date | Scope keyword | Reported cost, USD | Trade keyword matches |
| --- | --- | --- | ---: | --- |
| [101080522](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101080522) | 2026-09-23 | office | 9,965,000 | hvac, electrical, plumbing |
| [101087262](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101087262) | 2026-09-23 | office | 1,313,800 | Review source |
| [B200479858](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=B200479858) | 2026-09-23 | office | 194,000 | hvac, electrical |
| [101079857](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101079857) | 2026-09-22 | multi-family | 250,000 | roofing |
| [101085426](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101085426) | 2026-09-22 | office | 500,000 | Review source |
| [101085778](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101085778) | 2026-09-22 | retail | 2,359,444 | roofing, new_construction |
| [101087407](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101087407) | 2026-09-22 | office | 150,000 | hvac, electrical, plumbing, demolition |
| [101087823](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101087823) | 2026-09-22 | office | 500,000 | demolition |

Reported project costs are not supplier purchasing budgets. Trade matches are simple rules, not proof of remaining work. Source links allow independent verification.

### What a manual source check found

Our [ten-permit scope audit](CHICAGO-SUPPLIER-AUDIT.md) found why manual review matters: a hotel keyword referred to a small food-counter conversion inside an existing building, a warehouse record authorized foundation-only work, and an empty trade list omitted parking and fencing scope. Roof-deck references also do not establish separate roofing opportunities. This deliberately varied sample is not an overall accuracy score or proof of demand.

## How to evaluate it

1. Pick a scope you serve, such as office renovations, and review several official source records.
2. Assess whether the project stage and geography fit your business. Issued permits may already have contractors and suppliers.
3. Compare later observations to identify newly observed or changed records. A missing record is not evidence a project closed.
4. Keep a pursuit decision separately from the data: relevant, already awarded, outside territory, or insufficient information.

This sample omits street addresses, contact details, owner names and raw descriptions. It performs no outreach or contact enrichment. Changes are observed only within the rolling 30-day issue window; older permit changes are missed.

## Help shape a useful service

If this solves a real workflow for you, [open a product-interest issue](https://github.com/MDDunno128/ai-hub-services/issues/new) titled **Permit signals feedback**. Include your business use case, relevant trade/area, preferred JSON or CSV format, and the decision you need the data to support. Do not include private contact information or credentials. Feedback is not an order, subscription or payment commitment.

This is a demand-validation preview. Paid delivery, pricing, cloud operation and settlement for this product are unverified. [Existing available services](README.md).
