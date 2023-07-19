import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: undefined,
    email: undefined,
    phone: undefined,
    plan: {
      name: undefined,
      monthCost: 0,
    },
    isAnnualPlan: undefined,
    addons: {
      "Online Services": undefined,
      "Larger Storage": undefined,
      "Customizable Profile": undefined,
      cost: 0,
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
      console.log('set addons hit')
      state.addons[action.payload.title] = action.payload.isChecked;
      console.log(state.addons[action.payload.title]);
    },
    setTotalCost(state, action){
      console.log('set total cost hit', state.totalCost + action.payload)
      state.totalCost = state.totalCost + action.payload;
    },
  }
})

export default formSlice;