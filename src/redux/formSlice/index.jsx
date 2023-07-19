import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: undefined,
    email: undefined,
    phone: undefined,
    plan: undefined,
    addons: {
      onlineService: undefined,
      largerStorage: undefined,
      customProfile: undefined,
    }
  },
  reducers: {
    setName(state, action){
      state.name = action.payload;
    },
    setEmail(state, action){
      state.email = action.payload;
    },
    setPhone(state, action){
      state.phone = action.payload;
    },
    setPlan(state, action){
      state.plan = action.payload;
    },
    setAddOns(state, action){
      state.addons = action.payload;
    },
  }
})

export default formSlice;