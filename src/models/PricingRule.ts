import { Product } from './Product';

export interface PricingRule {
  name: string;
  product?: Product;
  purchaseCount: number;
  costCount: number;
  discountPrice: number;
}
