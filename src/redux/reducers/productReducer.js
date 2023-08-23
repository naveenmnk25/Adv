import { ActionType } from "../contants/action-types";


const initialState={
    product:[],
}
export const productReducer=(state=initialState,{type,payload})=>{
        switch (type) {
            case ActionType.SET_PRODUCTS:
                return {...state,product:payload};
            default:
                return state;
        }
}