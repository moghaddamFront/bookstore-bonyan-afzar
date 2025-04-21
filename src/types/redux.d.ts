// types/redux.d.ts
interface Product {
  id: string;
  name: string;
  price: number;
}

type CartItem = Product & {
  quantity: number;
};
