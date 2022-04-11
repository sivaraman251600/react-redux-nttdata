import { BUY_MILK } from "./milkTypes";

const initialState = {
    numOfMilk : 20
}

 export const MilkReducer = (state = initialState , action)=>{
    switch(action.type){
        case BUY_MILK : return {
            ...state,
            numOfMilk : state.numOfMilk - 2
        }
        default : return state
    }
}

