import { Checkout } from '../src/Checkout';
import { AppData, loadData } from '../src/modules/LoadData';
import { PricingRuleCalculation } from '../src/modules/PricingRuleCalculation';

describe('Checkout', () => {
  const { products, purchases, findCustomer }: AppData = loadData();
  const customerName = purchases[1].customer.toLocaleLowerCase();
  const customer = findCustomer(customerName);
  const calculation = new PricingRuleCalculation();

  it('should add items', () => {
    const co = new Checkout({ customer, calculation, products });
    const items = ['classic', 'classic', 'classic'];
    items.forEach(item => co.add(item));

    expect(co.items).toHaveLength(3);
  });

  it('should not add items if product not matched', () => {
    const co = new Checkout({ customer, calculation, products });
    const items = ['fakeProduct', 'fakeProduct', 'fakeProduct'];
    items.forEach(item => co.add(item));

    expect(co.items).toHaveLength(0);
  });

  it('should calculate total', () => {
    const co = new Checkout({ customer, calculation, products });
    const items = ['classic', 'classic', 'classic'];
    items.forEach(item => co.add(item));

    // 3 for 2 deal applied
    // 2 * 269.99
    expect(co.total()).toEqual(539.98);
  });
});
