import { combineReducers } from "@reduxjs/toolkit";
import formSlice from "./formSlice";

const formReducer = combineReducers({
  form: formSlice.reducer,
})

export default formReducer;