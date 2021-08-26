import { PricingRuleCalculation } from '../../src/modules/PricingRuleCalculation';
import { fakeCustomerGenerator } from '../fakes/fakeCustomerGenerator';
import { fakeItemsGenerator } from '../fakes/fakeItemsGenerator';
import { fakePricingRuleGenerator } from '../fakes/fakePricingRuleGenerator';
import { fakeProductGenerator } from '../fakes/fakeProductGenerator';

describe('applyPricingRule', () => {
  const fakeProducts = [
    fakeProductGenerator({
      name: 'fakeProduct1',
      description: 'fakeDescription1',
      retailPrice: 100
    }),
    fakeProductGenerator({
      name: 'fakeProduct2',
      description: 'fakeDescription2',
      retailPrice: 200
    }),
    fakeProductGenerator({
      name: 'fakeProduct3',
      description: 'fakeDescription3',
      retailPrice: 300
    }),
    fakeProductGenerator({
      name: 'fakeProduct4',
      description: 'fakeDescription4',
      retailPrice: 400
    })
  ];

  const fakePricingRules = [
    fakePricingRuleGenerator({
      name: 'fakeRule3For2',
      product: fakeProducts[0],
      purchaseCount: 3,
      costCount: 2
    }),
    fakePricingRuleGenerator({
      name: 'fakeRuleDiscount150',
      product: fakeProducts[1],
      discountPrice: 150
    })
  ];

  const fakeCustomer = fakeCustomerGenerator({
    name: 'fakeCustomer',
    pricingRules: fakePricingRules
  });

  // 5 products of $100.00
  // 1 product of $200
  // 1 product of $300
  const fakeItems = fakeItemsGenerator([
    fakeProducts[0],
    fakeProducts[1],
    fakeProducts[0],
    fakeProducts[2],
    fakeProducts[0],
    fakeProducts[0],
    fakeProducts[0]
  ]);

  const calculation = new PricingRuleCalculation();

  it('should apply pricing rule for customer checked out items and return correct total', () => {
    const total = calculation.applyPricingRule({
      customer: fakeCustomer,
      items: fakeItems
    });

    // 500 - 100 + 150 + 300
    expect(total).toEqual(850);
  });

  describe('should skip pricing rules for checked out items and return correct total', () => {
    it('if pricing rule not set', () => {
      const fakeCustomerWithoutPricingRule = fakeCustomer;
      fakeCustomerWithoutPricingRule.pricingRules = null;

      const total = calculation.applyPricingRule({
        customer: fakeCustomerWithoutPricingRule,
        items: fakeItems
      });

      // 500 + 200 + 300
      expect(total).toEqual(1000);
    });

    it('if products and pricing rules are not matched', () => {
      const fakeItemsNotMatched = fakeItemsGenerator([
        fakeProductGenerator({
          name: 'fakeProductNotMatched',
          description: 'fakeProductNotMatchedDescription',
          retailPrice: 10
        })
      ]);
      const total = calculation.applyPricingRule({
        customer: fakeCustomer,
        items: fakeItemsNotMatched
      });

      // 500 + 200 + 300
      expect(total).toEqual(10);
    });

    it('if pricing rule not matched', () => {
      const fakeCustomerWithNoMatches = fakeCustomer;
      fakeCustomerWithNoMatches.pricingRules = [
        fakePricingRuleGenerator({
          name: 'fakeRuleDiscount200',
          product: fakeProducts[3],
          discountPrice: 150
        })
      ];

      const total = calculation.applyPricingRule({
        customer: fakeCustomerWithNoMatches,
        items: fakeItems
      });

      // 500 + 200 + 300
      expect(total).toEqual(1000);
    });
  });
});
