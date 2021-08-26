import { products } from './data/products';
import { Customer } from './models/Customer';
import { Product } from './models/Product';
import { PricingRuleCalculation } from './modules/PricingRuleCalculation';

export interface Item {
  name: string,
  product?: Product,
}

interface CheckoutParams {
  customer: Customer,
  calculation: PricingRuleCalculation,
  products: Product[]
}

export class Checkout {
  private readonly _customer: Customer;
  private readonly _calculation: PricingRuleCalculation;
  private readonly _products: Product[];
  private _items?: Item[] = [];
  private _total: number = 0;

  get items () {
    return this._items;
  }

  constructor ({
    customer,
    calculation,
    products
  }: CheckoutParams) {
    this._customer = customer;
    this._calculation = calculation;
    this._products = products;
  }

  private getProduct (itemName: string): Product | null {
    return this._products.find(product => product.name === itemName.toLocaleLowerCase()) || null;
  }

  add (itemName: string): void {
    const product = this.getProduct(itemName);

    if (product) {
      this._items.push({
        name: itemName,
        product
      });
    }
  }

  total (): number {
    this._total = this._calculation.applyPricingRule({
      customer: this._customer,
      items: this._items
    });
    return this._total;
  }
}
