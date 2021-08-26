import { Customer } from '../../src/models/Customer';

export const fakeCustomerGenerator = ({
  name,
  pricingRules
}): Customer => ({
  name,
  pricingRules
});
