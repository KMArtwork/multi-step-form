import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: undefined,
    email: undefined,
    phone: undefined,
    plan: undefined,
    isAnnualPlan: undefined,
    addons: {
      onlineService: undefined,
      largerStorage: undefined,
      customProfile: undefined,
    },
    totalCost: 0,
  },
  reducers: {
    setName(state, action){
      console.log('set name hit', action.payload)
      state.name = action.payload;
    },
    setEmail(state, action){
      console.log('set email hit', action.payload)
      state.email = action.payload;
    },
    setPhone(state, action){
      console.log('set phone hit', action.payload)
      state.phone = action.payload;
    },
    setPlan(state, action){
      console.log('set plan hit', action.payload);
      state.plan = action.payload;
    },
    setIsAnnualPlan(state, action){
      console.log('set isAnnualPlan hit', action.payload)
      state.isAnnualPlan = action.payload;
    },
    setAddOns(state, action){
      state.addons = action.payload;
    },
    setTotalCost(state, action){
      state.totalCost = 0;
    },
  }
})

export default formSlice;