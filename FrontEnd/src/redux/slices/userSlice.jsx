import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTokenByUser from "../../services/getTokenByUser";
import getUser from "../../services/getUser";

const initialState = {
  loading: "idle",
  token: null,
  email: "",
  name: "",
  role: "",
  avatar: "",
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    authUser: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.fulfilled, (state, action) => {
        if (!action.payload) return;
        const { access_token, refrech_token } = action.payload;
        state.token = access_token;
        state.loading = "succeeded";
      })
      .addCase(fetchToken.pending, (state, action) => {
        state.loading = "pending";
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.loading = "failed";
      });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const { email, name, role, avatar } = action.payload;
      state.email = email;
      state.name = name;
      state.role = role;
      state.avatar = avatar;
    });
  },
});

export const fetchToken = createAsyncThunk(
  "validateUser",
  async (user) => await getTokenByUser(user)
);

export const fetchUser = createAsyncThunk(
  "getUser",
  async (token) => await getUser(token)
);

export default userSlice.reducer;
export const { authUser } = userSlice.actions;
