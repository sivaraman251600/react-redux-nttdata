import { BUY_MILK } from "./milkTypes";


export const createBuyMilkAction = (quantity) => {
  return {
    type: BUY_MILK,
    payload: { quantity: quantity },
  };
};
