import { getTSHTopics } from "@/api/apiRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// MARK: --- Thunks ---
// export const thunkGetThanSoHocData = createAsyncThunk(
//   "than-so-hoc",
//   async (params) => {
//     const res = await getTSHTopics(params);
//     return res;
//   }
// );

export const appSlice = createSlice({
  name: "app",
  initialState: {
    appLoading: false,
  },
  reducers: {
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
    // setActiveInvoice: (state, action) => {
    //   state.activeInvoice = action.payload;
    // },
  },
//   extraReducers: (builder) => {
//     builder.addCase(thunkGetThanSoHocData.pending, (state) => {
//       state.thanSoHocData = {};
//     });
//     builder.addCase(thunkGetThanSoHocData.rejected, (state) => {
//       state.thanSoHocData = {};
//     });
//     builder.addCase(thunkGetThanSoHocData.fulfilled, (state, action) => {
//       console.log(state, action);
//       state.thanSoHocData = { hi: "hi" };
//     });
//   },
});

const { reducer, actions } = appSlice;
export const { setAppLoading } = actions;
export default reducer;
