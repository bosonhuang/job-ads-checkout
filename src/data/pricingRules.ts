import { products, ProductNames } from './products';
import { PricingRule } from '../models/PricingRule';

export enum pricingRuleNames {
  ClassicDeal = '3 for 2 Classic Ads',
  StandoutDiscount = 'Stand out Ads for $299.99',
  StandoutDeal = '5 for 4 Stand out Ads',
  PremiumDiscount = 'Premium Ads for $389.99',
}

export const pricingRules: PricingRule[] = [
  {
    name: pricingRuleNames.ClassicDeal,
    product: products.find(product => product.name === ProductNames.Classic),
    purchaseCount: 3,
    costCount: 2,
    discountPrice: 0
  },
  {
    name: pricingRuleNames.StandoutDiscount,
    product: products.find(product => product.name === ProductNames.Standout),
    purchaseCount: 0,
    costCount: 0,
    discountPrice: 299.99
  },
  {
    name: pricingRuleNames.StandoutDeal,
    product: products.find(product => product.name === ProductNames.Standout),
    purchaseCount: 5,
    costCount: 4,
    discountPrice: 0
  },
  {
    name: pricingRuleNames.PremiumDiscount,
    product: products.find(product => product.name === ProductNames.Premium),
    purchaseCount: 0,
    costCount: 0,
    discountPrice: 389.99
  }
];
