# Ten permit scopes checked against the official source

On September 25, 2026, we manually reviewed ten permits already present in the [Chicago supplier preview](CHICAGO-SUPPLIER-PREVIEW.md). We deliberately chose different keywords and permit types, rather than a random sample. This is a small quality check, not a market-wide accuracy score or evidence of buyer demand.

The check retrieved only permit number, permit type and work description from the City of Chicago. The summaries below omit contact information, addresses, names and raw descriptions. The original 99-record preview remains dated September 25 at 05:31 UTC; this check did not repeat the full source scan.

| Official permit | What the scope actually describes | Implication for supplier research |
| --- | --- | --- |
| [101080522](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101080522) | Manufacturing and accessory-office alterations, an entry addition, demolition and mechanical/electrical/plumbing work. | The `office` keyword describes only part of the project. The displayed trade list also misses demolition wording in this scope. |
| [B200479858](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=B200479858) | Conversion of office space to a conference room, including partitions, ceiling, finishes and mechanical/electrical work. | Interior fit-out is the useful context; an office keyword alone does not communicate the work package. |
| [101079857](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101079857) | Legalization of a basement dwelling unit, renovations and roof repair in a multifamily building. | Roofing is explicitly supported, but completion, procurement timing and available work remain unknown. |
| [101085778](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101085778) | New apartments with ground-floor retail, garage, decks and related building features. | `retail` does not mean a stand-alone shop fit-out. A rooftop-deck reference is not proof of a separate roofing opportunity. |
| [101076606](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101076606) | Commercial remodel with parking, driveway and fencing work. | The empty trade list misses potentially relevant paving/fencing scope; empty means no supported keyword match, not no work. |
| [101084132](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101084132) | New mixed-use building with commercial space, dwellings, a roof deck and garage. | Multiple use types belong to one project. A roof-deck keyword needs source review before roofing outreach. |
| [101086055](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101086055) | A small sales-office area converted to a smoothie/coffee counter within a mixed-use building containing a hotel. | The `hotel` keyword is building context; this permit is not evidence of a new hotel project or a hotel-wide renovation. |
| [101083681](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101083681) | Foundation-only work for an industrial building addition with warehouse use and underground plumbing. | Foundation-only authorization is narrower than a full warehouse build. Later work packages cannot be assumed. |
| [101076017](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101076017) | Wrecking and removal of a mixed-use building. | This is demolition, not evidence of a new mixed-use construction contract. |
| [101086725](https://data.cityofchicago.org/resource/ydr8-5enu.json?permit_=101086725) | Renovation and expansion of an existing restaurant into adjacent space. | Restaurant fit-out is supported; kitchen equipment requirements, contractor selection and purchasing status are unspecified. |

## What this changes in the workflow

The ten scopes contain the matched commercial or multifamily terms, but keyword presence is much weaker than supplier relevance. This sample demonstrates both missing trade coverage and building-context matches. It cannot establish the accuracy or recall of all 99 records, and it does not validate any unreviewed record.

Before using a signal:

1. Check permit type and the actual authorized scope. Separate demolition, foundation-only work, renovation and full new construction.
2. Separate the building's existing use from the space or work being changed.
3. Confirm the specific trade in the source. Treat the generated trade list as a search aid; neither a match nor an empty list is conclusive.
4. Independently establish whether there is a relevant purchasing opportunity. An issued permit does not establish an open bid or unawarded work.

No contact enrichment or outreach was performed. No paid permit product was activated. Customer demand, paid delivery and settlement remain unverified.
