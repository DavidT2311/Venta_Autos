import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = { ...action.payload };
      const existingProduct = state.cartProducts.find(
        (item) => item.id == product.id
      );

      if (existingProduct) {
        console.log("xd", existingProduct);
        existingProduct.quantity += 1;
      } else {
        console.log("ss", product);
        product.quantity = 1;
        state.cartProducts.push(product);
      }
    },
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
