import { createSlice } from "@reduxjs/toolkit";


export const appSlice = createSlice({
  name: "app",
  initialState: {
    appLoading: false,
  },
  reducers: {
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
  },
});

const { reducer, actions } = appSlice;
export const { setAppLoading } = actions;
export default reducer;
