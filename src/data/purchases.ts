export interface Purchase {
  customer: string,
  items: string[]
}

export const purchases: Purchase[] = [
  {
    customer: 'default',
    items: ['classic', 'standout', 'premium']
  },
  {
    customer: 'SecondBite',
    items: ['classic', 'classic', 'classic', 'premium']
  },
  {
    customer: 'Axil Coffee Roasters',
    items: ['standout', 'standout', 'standout', 'premium']
  },
  {
    customer: 'MYER',
    items: ['standout', 'standout', 'standout', 'premium']
  }
];
