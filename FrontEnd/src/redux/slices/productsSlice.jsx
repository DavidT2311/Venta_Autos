import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getProducts from "../../services/getProducts";
import createProductsService from "../../services/createProductsService";
import editProduct from "../../services/editProduct";
import removeProduct from "../../services/removeProduct";

const initialState = {
  loading: "idle",
  products: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      createProductsService(action.payload);
      state.loading = "idle";
    },
    uptadeProduct: (state, action) => {
      const { _id } = action.payload;
      editProduct(_id, action.payload);
      state.loading = "idle";
    },
    deleteProduct: (state, action) => {
      removeProduct(action.payload);
      state.loading = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchProducts.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

export const fetchProducts = createAsyncThunk(
  "getProducts",
  async () => await getProducts()
);

export default productSlice.reducer;
export const { createProduct, uptadeProduct, deleteProduct } =
  productSlice.actions;
