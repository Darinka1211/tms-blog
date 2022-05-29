import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type AuthState = {
  user: User | null;
  isLoading: string;
  error: string | null;
};
type User = {
  name: string;
};
type SingUpPayload = {
  name: string;
  email: string;
  password: string;
};
const initialState: AuthState = {
  user: null,
  isLoading: "idle",
  error: null,
};
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    singUp: (state) => {
      if (state.isLoading === "idle") {
        state.isLoading = "pending";
      }
    },
    singUpSuccess: (state, action: PayloadAction<SingUpPayload>) => {
      if ((state.isLoading = "pending")) {
        state.isLoading = "idle";
        state.user = action.payload;
      }
    },
    singUpFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = "idle";
      state.error = action.payload;
    },
  },
});
export const { singUpSuccess, singUp, singUpFailure } = authSlice.actions;
export default authSlice.reducer;
