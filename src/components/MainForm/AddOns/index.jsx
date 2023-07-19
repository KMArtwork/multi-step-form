import React from "react";

import AddOnCard from "./AddOnCard";

function AddOns() {

  return(
    <div className="form-step-container">
      <div id='addon-container'>
        <AddOnCard title={'Online Services'} subtitle={'Access to multiplayer games'} moCost={1}  />
        <AddOnCard title={'Larger Storage'} subtitle={'Extra 1TB of cloud save'} moCost={2}  />
        <AddOnCard title={'Customizable Profile'} subtitle={'Custom theme on your profile'} moCost={2}  />        
      </div>
    </div>
  )

}

export default AddOns;