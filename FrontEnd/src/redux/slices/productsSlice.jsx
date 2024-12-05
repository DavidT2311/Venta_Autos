import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getProducts from "../../services/getProducts";
import removeProduct from "../../services/removeProduct";
import editProduct from "../../services/editProduct";

const initialState = {
  loading: "idle",
  products: [],
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      createProductsService(action.payload)
      state.loading = "idle"
    },
    uptadeProduct: (state, action) => {
      const { id } = action.payload;
      editProduct(id, action.payload);
      state.estado = "idle";
    },
    deleteProduct: (state, action) => {
      removeProduct(action.payload);
      state.estado = "idle";
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
