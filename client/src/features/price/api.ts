import { Price } from "./type";

export const initPriceFetch = async (): Promise<Price[]> => {
    const data = await (await fetch('/api/price/')).json();
  return data 
  };