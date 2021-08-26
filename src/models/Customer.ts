import { PricingRule } from './PricingRule';

export interface Customer {
  name: string;
  pricingRules?: PricingRule[];
}
