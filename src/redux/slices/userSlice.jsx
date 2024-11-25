import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTokenByUser from "../../services/getTokenByUser";

const initialState = {
  loading: "idle",
  email: "",
  token: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    authUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(validateUser.fulfilled, (state, action) => {
        if (!action.payload) return;
        const { access_token, refrech_token } = action.payload.json;
        const { email } = action.payload;
        state.email = email;
        state.token = access_token;
        state.loading = "succeeded";
      })
      .addCase(validateUser.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(validateUser.rejected, (state, action) => {
        state.loading = "failed";
      });
  },
});

export const validateUser = createAsyncThunk(
  "validateUser",
  async (user) => await getTokenByUser(user)
);

export default userSlice.reducer;
export const { authUser } = userSlice.actions;
