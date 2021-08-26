import { Product } from '../../src/models/Product';

export const fakeProductGenerator = ({
  name,
  description,
  retailPrice = 100
}): Product => ({
  name,
  description,
  retailPrice
});
