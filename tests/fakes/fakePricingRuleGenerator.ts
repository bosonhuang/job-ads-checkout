import { PricingRule } from '../../src/models/PricingRule';

export const fakePricingRuleGenerator = ({
  name,
  product,
  purchaseCount = 0,
  costCount = 0,
  discountPrice = 0
}): PricingRule => ({
  name,
  product,
  purchaseCount,
  costCount,
  discountPrice
});
