import { Add_to_cart } from "../constant"

const initialState={
    cartData:[]
}

export default function cartItems(state=initialState,action){
switch(action.type){
    case Add_to_cart:
        return {
            ...state,
            cartData:action.data
        }
        // break:
        default:
            return state;
}
}
