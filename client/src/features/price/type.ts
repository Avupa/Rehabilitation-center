
export type State = {
  prices: Price[];
  error: undefined | string;
};

export type Price = {
  id: number;
  name: string;
  price: number;
  description:string;
  category: string;
};

export type IdPrice = Price['id'];
export type PriceWithoutID = Omit<Price, 'id'>;
