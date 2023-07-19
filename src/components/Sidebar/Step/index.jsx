import React from "react";

import { Text } from "@chakra-ui/react";

function FormStep({stepNumber, stepLabel}) {

  return(
    <div className="form-step">
      <div className="step-number">
        {stepNumber}
      </div>
      <div className="step-text">
        <Text className="step-number-text">Step {stepNumber}</Text>
        <Text className="step-label">{stepLabel}</Text>
      </div>
    </div>
  )

}

export default FormStep;