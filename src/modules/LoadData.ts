import { customers } from '../data/customers';
import { products } from '../data/products';
import { Purchase, purchases } from '../data/purchases';
import { Customer } from '../models/Customer';
import { Product } from '../models/Product';

interface FindCustomerFunc {
  (customerName: string): Customer
}

export interface AppData {
  customers: Customer[],
  products: Product[],
  purchases: Purchase[],
  findCustomer: FindCustomerFunc
}

export const loadData = (): AppData => {
  const findCustomer: FindCustomerFunc = (customerName: string): Customer => customers.find(
    customer => customer.name.toLocaleLowerCase() === customerName
  );

  return {
    customers,
    products,
    purchases,
    findCustomer
  };
};
