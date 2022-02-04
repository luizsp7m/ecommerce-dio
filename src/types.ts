export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  amountInCart: number;
}

export interface Stock {
  id: number;
  amount: number;
}