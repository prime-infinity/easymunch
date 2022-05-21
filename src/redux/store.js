import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./silces/authSlice";
import menuReducer from "./silces/menuSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    menu: menuReducer,
  },
});

export default store;
