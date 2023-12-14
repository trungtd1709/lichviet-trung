import { getTSHDetail, getTSHTopics } from "@/api/apiRequest";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// MARK: --- Thunks ---
export const thunkGetThanSoHocData = createAsyncThunk(
  "than-so-hoc-topics",
  async (params) => {
    const res = await getTSHTopics(params);
    return res;
  }
);

export const thunkGetGiaiMaNgaySinhData = createAsyncThunk(
  "than-so-hoc-giai-ma-ngay=sinh",
  async (params) => {
    const res = await getTSHDetail({ ...params, type: "6" });
    return res;
  }
);

export const thunkGetGiaiDoanCuocDoiData = createAsyncThunk(
  "than-so-hoc-giai-doan-cuoc-doi",
  async (params) => {
    const res = await getTSHDetail({ ...params, type: "7" });
    return res;
  }
);

export const thunkGetConSoData = createAsyncThunk(
  "than-so-hoc-con-so",
  async (params, type) => {
    const res = await getTSHDetail(params);
    return res;
  }
);

export const thanSoHocSlice = createSlice({
  name: "thanSoHoc",
  initialState: {
    tshUser: {},
    topics: [],
    giaiMaNgaySinh: {},
    giaiDoanCuocDoi: {},
    conSoData: [],

  },
  reducers: {
    setTSHData: (state, action) => {
      state.thanSoHocData = action.payload;
    },
    setTshUser: (state, action) => {
      state.tshUser.name = action.payload.name;
      state.tshUser.birthday = action.payload.birthday;
    },
    // setThanSoHocData: (state, action) => {
    //   state.activeInvoice = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(thunkGetThanSoHocData.pending, (state) => {
      state.topics = [];
    });
    builder.addCase(thunkGetThanSoHocData.rejected, (state) => {
      state.topics = [];
    });
    builder.addCase(thunkGetThanSoHocData.fulfilled, (state, action) => {
      console.log(state, action);
      state.topics = action.payload;
    });

    builder.addCase(thunkGetGiaiMaNgaySinhData.pending, (state) => {
      state.giaiMaNgaySinh = {};
    });
    builder.addCase(thunkGetGiaiMaNgaySinhData.rejected, (state) => {
      state.giaiMaNgaySinh = {};
    });
    builder.addCase(thunkGetGiaiMaNgaySinhData.fulfilled, (state, action) => {
      console.log(state, action);
      state.giaiMaNgaySinh = action.payload;
    });

    builder.addCase(thunkGetGiaiDoanCuocDoiData.pending, (state) => {
      state.giaiDoanCuocDoi = {};
    });
    builder.addCase(thunkGetGiaiDoanCuocDoiData.rejected, (state) => {
      state.giaiDoanCuocDoi = {};
    });
    builder.addCase(thunkGetGiaiDoanCuocDoiData.fulfilled, (state, action) => {
      console.log(state, action);
      state.giaiDoanCuocDoi = action.payload;
    });

    builder.addCase(thunkGetConSoData.pending, (state) => {
      state.conSoData = [];
    });
    builder.addCase(thunkGetConSoData.rejected, (state) => {
      state.conSoData = [];
    });
    builder.addCase(thunkGetConSoData.fulfilled, (state, action) => {
      console.log(state, action);
      state.conSoData = action.payload;
    });
  },
});

const { reducer, actions } = thanSoHocSlice;
export const { setTSHData, setTshUser } = actions;
export default reducer;
