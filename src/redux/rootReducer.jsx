import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";
import productsSlice from "./slices/productsSlice";
import userSlice from "./slices/userSlice";

const reducer = combineReducers({
  products: productsSlice,
  cartProducts: cartSlice,
  user: userSlice,
});

export default reducer;
