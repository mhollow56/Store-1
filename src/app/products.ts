export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 799,
    description: ' good dependable laptop',
  },
  {
    id: 2,
    name: 'Gaming Desktop ',
    price: 2000,
    description: 'A gaming computer with all the bells and whistles',
  },
  {
    id: 3,
    name: 'Tablet',
    price: 299,
    description: '',
  },
  {
    id: 4,
    name: 'Mini Tablet',
    price: 199,
    description: 'Fast speeds good value',

  }
];
