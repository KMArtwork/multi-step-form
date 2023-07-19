import React from "react";

import { Text, Circle } from "@chakra-ui/react";

function FormStep({stepNumber, stepLabel}) {

  return(
    <div className="sidebar-step">
      <Circle size='2.5rem' className="step-number">
        {stepNumber}
      </Circle>
      <div className="step-text">
        <Text className="step-number-text">Step {stepNumber}</Text>
        <Text className="step-label">{stepLabel}</Text>
      </div>
    </div>
  )

}

export default FormStep;