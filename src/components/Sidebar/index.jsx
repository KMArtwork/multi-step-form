import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import FormStep from "./Step";

function Sidebar() {

  const state = useSelector(state => state.form);

  useEffect(() => {
    let stepNumbers = document.getElementsByClassName('step-number');
    if(state.formIdx < 4){
      let prevActive = document.getElementsByClassName('step-number active');

      for(const element of prevActive){
        element.classList.remove('active');
      }
      stepNumbers[state.formIdx].classList.add('active')      
    }
  }, [state.formIdx])

  return(
    <div id='sidebar-bg'>
      <div id='form-all-steps'>
        <FormStep stepNumber={1} stepLabel={'Your Info'} />
        <FormStep stepNumber={2} stepLabel={'Select Plan'} />
        <FormStep stepNumber={3} stepLabel={'Add-Ons'} />
        <FormStep stepNumber={4} stepLabel={'Summary'} />
      </div>
    </div>

  )

}

export default Sidebar;