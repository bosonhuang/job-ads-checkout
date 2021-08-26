import { Item } from '../../src/Checkout';
import { Product } from '../../src/models/Product';

export const fakeItemsGenerator = (products: Product[]): Item[] =>
  products.map(product => ({
    name: product.name,
    product
  }));
