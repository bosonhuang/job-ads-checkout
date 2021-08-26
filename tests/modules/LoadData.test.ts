import { customers } from '../../src/data/customers';
import { products } from '../../src/data/products';
import { purchases } from '../../src/data/purchases';
import { loadData } from '../../src/modules/LoadData';

describe('loadData', () => {
  const appData = loadData();

  it('should load data of AppData type', () => {
    expect(appData).toEqual(expect.objectContaining({
      customers,
      products,
      purchases
    }));
  });

  it('should return findCustomer func', () => {
    const { findCustomer } = appData;

    const fakeCustomerName = 'default';
    const customerFound = findCustomer(fakeCustomerName);

    expect(customerFound.name).toEqual('default');
    expect(customerFound.pricingRules).toBeNull();
  });
});
