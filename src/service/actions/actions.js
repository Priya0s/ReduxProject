
import { Add_to_cart } from "../constant"
export const addToCart = (data) => {
  return {
    type:Add_to_cart,
    data:data
  }
}


