import React from "react";
import { useSelector } from "react-redux";

import AddOnCard from "./AddOnCard";

function AddOns() {
  
  const state = useSelector(state => state.form);

  return(
    <div className="form-step-container">
      <div id='addon-container'>
        <AddOnCard title={'Online Services'} subtitle={'Access to multiplayer games'} monthCost={state.addons['Online Services'].monthCost} checked={state.addons['Online Services'].isAdded}/>

        <AddOnCard title={'Larger Storage'} subtitle={'Extra 1TB of cloud save'} monthCost={state.addons['Larger Storage'].monthCost} checked={state.addons['Larger Storage'].isAdded}/>

        <AddOnCard title={'Customizable Profile'} subtitle={'Custom theme on your profile'} monthCost={state.addons['Customizable Profile'].monthCost}  checked={state.addons['Customizable Profile'].isAdded}/>        
      </div>
    </div>
  )

}

export default AddOns;