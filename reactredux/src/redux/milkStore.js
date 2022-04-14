import { createStore } from "redux";
import { MilkReducer } from "../redux/milk/milkReducer";

export const milkStore = createStore(MilkReducer);
