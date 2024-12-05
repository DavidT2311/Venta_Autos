import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";

const reducer = combineReducers({
  products: productsSlice,
  cartProducts: cartSlice,
});

export default reducer;
