import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./slices/appSlice";
import thanSoHocReducer from "./slices/thanSoHocSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
    thanSoHoc: thanSoHocReducer,
  },
});
export default store;
