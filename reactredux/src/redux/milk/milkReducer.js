import { BUY_MILK } from "./milkTypes";

const initialState = {
  numOfMilk: 20,
};

const Quant = {
    quantity : 20
}

export const MilkReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case BUY_MILK:
      return {
        ...currentState,
        numOfMilk: currentState.numOfMilk - action.payload.quantity
      };
    default:
      return currentState;
  }
};
