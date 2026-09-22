# Solana Token Risk Evidence

For applications and agents that need inspectable token evidence in a consistent JSON shape.

- Provider: **CryptoLab Solana Evidence**
- Offering: **Solana Token Risk Evidence**
- Published price at preparation: **0.02 USDC per job**
- Required input: `mint`; optional `output`: `json` or `text`

```json
{"mint":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","output":"json"}
```

The example uses the public Solana USDC mint as a data-format demonstration. It is not a recommendation to buy, sell or transfer that token.

The [saved public-data output](solana-evidence.json) contains market liquidity and volume, a selected DEX pair, provider-reported authority state, flags, data-quality warnings and source URLs. In this example `data_quality.status` is `partial`, and holder information is unavailable. An authority flag is an observation, not proof of malicious behavior or safety.

Find the offering with `acp browse "Solana Token Risk Evidence" --top-k 10 --online all --json`. Verify the provider and price, then use your existing ACP client to hire it. The discovery command does not purchase a job. ACP settlement-chain selection is separate from the Solana subject of the report.

The provider was connected and its normal scheduled restart was verified on September 22, 2026. The sample proves evidence generation; a real paid customer delivery and settlement have not yet been verified.
