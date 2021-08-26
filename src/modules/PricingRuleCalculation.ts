import { PricingRule } from '../models/PricingRule';
import { Item } from '../Checkout';
import { Customer } from '../models/Customer';

interface ApplyPricingRuleParams {
  customer: Customer,
  items: Item[]
}

interface GetPricingRuleParams {
  customer: Customer,
  item: Item
}

export class PricingRuleCalculation {
  private getAppliedPricingRule ({
    customer,
    item
  }: GetPricingRuleParams): PricingRule | null {
    if (!customer.pricingRules) {
      return null;
    }

    return customer.pricingRules.find(pricingRule =>
      pricingRule.product.name === item.product.name) || null;
  }

  applyPricingRule ({
    customer,
    items
  }: ApplyPricingRuleParams): number {
    let purchasedCount = 0;
    let total = 0;

    items.forEach(item => {
      const pricingRule = this.getAppliedPricingRule({ customer, item });

      if (pricingRule) {
        // calculate deal
        if (pricingRule.purchaseCount > 0) {
          purchasedCount++;

          if (purchasedCount === pricingRule.purchaseCount) {
            total -= ((pricingRule.purchaseCount - pricingRule.costCount) * item.product.retailPrice);
            purchasedCount = 0;
          }
        } else {
          // calculate discount price
          total += pricingRule.discountPrice;
          return;
        }
      }

      total += item.product.retailPrice;
    });

    return total;
  }
}
