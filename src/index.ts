import { Checkout } from './Checkout';
import { PricingRuleCalculation } from './modules/PricingRuleCalculation';
import { AppData, loadData } from './modules/LoadData';

const App = () => {
  const calculation = new PricingRuleCalculation();
  const { products, purchases, findCustomer }: AppData = loadData();

  purchases.forEach(purchase => {
    const customerName = purchase.customer.toLocaleLowerCase();
    const customer = findCustomer(customerName);

    const co = new Checkout({ customer, calculation, products });

    purchase.items.forEach(item => {
      co.add(item);
    });

    const total = co.total();

    console.log({
      customer: customer.name,
      pricingRules: customer.pricingRules ? customer.pricingRules.map(pricingRule => pricingRule.name) : [],
      items: purchase.items,
      total
    });
  });
};

App();
