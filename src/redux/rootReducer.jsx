import { combineReducers } from "redux";
import cartSlice from "./slices/cartSlice";

const reducer = combineReducers({
  products: cartSlice,
});

export default reducer;
