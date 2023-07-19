import React from "react";

import { Image } from '@chakra-ui/react';
import sidebarBg from '../../assets/images/bg-sidebar-desktop.svg';
import FormStep from "./Step";

function Sidebar() {

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