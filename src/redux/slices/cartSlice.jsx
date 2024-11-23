import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalProducts: 0,
  totalPrice: 0,
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
        existingProduct.quantity += 1;
      } else {
        product.quantity = 1;
        state.cartProducts.push(product);
        state.totalProducts = state.cartProducts.length;
      }
      state.totalPrice += product.price || existingProduct.price;
    },
    deleteProductFromCart: (state, action) => {
      const product = { ...action.payload };
      const existingProduct = state.cartProducts.find(
        (item) => item.id == product.id
      );

      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        const index = state.cartProducts.indexOf(product);
        state.cartProducts.splice(index, 1);
        state.totalProducts = state.cartProducts.length;
      }
      state.totalPrice -= existingProduct.price;
    },
    clearCart: (state, action) => {
      state.cartProducts = initialState.cartProducts;
      state.totalProducts = state.cartProducts.length;
      state.totalPrice = initialState.totalPrice;
    },
  },
});

export default cartSlice.reducer;
export const { addProductToCart, deleteProductFromCart, clearCart } =
  cartSlice.actions;

//---Carrito de compras---
//Agregar un producto o existencia
//Eliminar un productos o existencia
//Limpiar el carrito
