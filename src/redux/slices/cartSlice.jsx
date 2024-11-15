import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {},
    deleteProductFromCart: (state, action) => {},
    clearCart: (state, action) => {},
  },
});

export default cartSlice.reducer;
export const { addProductToCart, deleteProductFromCart, clearCart } =
  cartSlice.actions;

//---Carrito de compras---
//Agregar un producto o existencia
//Eliminar un productos o existencia
//Limpiar el carrito
