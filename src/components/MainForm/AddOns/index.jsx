import React from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../../redux/formSlice";

import AddOnCard from "./AddOnCard";

function AddOns() {
  
  const state = useSelector(state => state.form);
  const dispatch = useDispatch();
  const {setAddOns, setTotalCost} = formSlice.actions;

  return(
    <div className="form-step-container">
      <div id='addon-container'>
        <AddOnCard title={'Online Services'} subtitle={'Access to multiplayer games'} moCost={1} checked={state.addons['Online Services']}/>
        <AddOnCard title={'Larger Storage'} subtitle={'Extra 1TB of cloud save'} moCost={2} checked={state.addons['Larger Storage']}/>
        <AddOnCard title={'Customizable Profile'} subtitle={'Custom theme on your profile'} moCost={2}  checked={state.addons['Customizable Profile']}/>        
      </div>
    </div>
  )

}

export default AddOns;