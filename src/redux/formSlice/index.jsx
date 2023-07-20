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
      "Online Services": {
        isAdded: false,
        monthCost: 1
      },
      "Larger Storage": {
        isAdded: false,
        monthCost: 2,
      },
      "Customizable Profile": {
        isAdded: false,
        monthCost: 2,
      },
    },
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
      state.addons[action.payload.title].isAdded = action.payload.isChecked;
      // state.addons.cost = state.addons.cost + action.payload.cost;
      // console.log('new cost', state.addons.cost)
    },
  }
})

export default formSlice;