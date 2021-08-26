import { pricingRules, pricingRuleNames } from './pricingRules';
import { Customer } from '../models/Customer';

export const customers: Customer[] = [
  {
    name: 'default',
    pricingRules: null
  },
  {
    name: 'SecondBite',
    pricingRules: pricingRules.filter(rule => rule.name === pricingRuleNames.ClassicDeal)
  },
  {
    name: 'Axil Coffee Roasters',
    pricingRules: pricingRules.filter(rule => rule.name === pricingRuleNames.StandoutDiscount)
  },
  {
    name: 'MYER',
    pricingRules: pricingRules.filter(rule =>
      rule.name === pricingRuleNames.StandoutDeal ||
      rule.name === pricingRuleNames.PremiumDiscount)
  }
];
