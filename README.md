# job-ads-checkout
A simple console application to job ads checkout system

## Getting started

### Prerequisites

- `npm` version '>7.21.0'
- `node` version '>12.18.0'
- `typescript` version '>4.3.5'
### Installing

run `ops/bin/install.sh`

There is no npm dependencies on running the application. Dev dependencies requires for unit tests.

It runs typecheck and unit tests on installing.

### Running the application

run `ops/bin/run.sh`

- it builds TS
- it runs the application and output results on the console.
- it loads default data set in `src/data`

#### Expected output
```
{
  customer: 'default',
  pricingRules: [],
  items: [ 'classic', 'standout', 'premium' ],
  total: 987.97
}
{
  customer: 'SecondBite',
  pricingRules: [ '3 for 2 Classic Ads' ],
  items: [ 'classic', 'classic', 'classic', 'premium' ],
  total: 934.97
}
{
  customer: 'Axil Coffee Roasters',
  pricingRules: [ 'Stand out Ads for $299.99' ],
  items: [ 'standout', 'standout', 'standout', 'premium' ],
  total: 1294.96
}
{
  customer: 'MYER',
  pricingRules: [ '5 for 4 Stand out Ads', 'Premium Ads for $389.99' ],
  items: [ 'standout', 'standout', 'standout', 'premium' ],
  total: 1358.96
}
```

### File structure

```
.
├── Checkout.ts
├── data
│   ├── customers.ts
│   ├── pricingRules.ts
│   ├── products.ts
│   └── purchases.ts
├── index.ts
├── models
│   ├── Customer.ts
│   ├── PricingRule.ts
│   └── Product.ts
└── modules
    ├── LoadData.ts
    └── PricingRuleCalculation.ts
```

- `data/` holds predefined customers, pricing rules, products and purchases.
- purchases are checkout items for associated customers.
- `models` holds Customer, PricingRule and Product constrains.
- `modules` holds data loading and calculation logic.


### Tests

run `npm run test`

- it's configured to 100% code coverage.

### Assumption & discussion

- `data/` folder can be renamed to a more suitable/meaningful way.
- predefined data in `data/` more like constants but the way I coded it up has interlinking to each others, it's not pure constants. I assume they will be data source from external that get loaded into the application.
- the application is designed to be customer-oriented. Customers have associated pricing rules, and when in checkout, the `Checkout` object takes `Customer` as a param to initialize.
- `LoadData` may not be suitable sitting in `modules` dir, but I am running out of time.
- lastly, no excuse on late submission, but it's a bad time that we having a new born baby issue this week :(
