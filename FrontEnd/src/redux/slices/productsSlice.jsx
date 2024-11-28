import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//Services
import getProducts from "../../services/getProducts";

const initialState = {
  loading: "idle",
  products: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    createProduct: (state, action) => {},
    uptadeProduct: (state, action) => {},
    deleteProduct: (state, action) => {},
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
