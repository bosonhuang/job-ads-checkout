import { Product } from '../models/Product';

export enum ProductNames {
  Classic = 'classic',
  Standout = 'standout',
  Premium = 'premium',
}

export const products: Product[] = [
  {
    name: ProductNames.Classic,
    description: 'Offers the most basic level of advertisement',
    retailPrice: 269.99
  },
  {
    name: ProductNames.Standout,
    description: 'Allows advertisers to use a company logo and use a longer presentation text',
    retailPrice: 322.99
  },
  {
    name: ProductNames.Premium,
    description: 'Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility',
    retailPrice: 394.99
  }
];
