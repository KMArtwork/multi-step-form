import React from "react";
import { Text } from '@chakra-ui/react'

function AddOnSummary({name, monthCost, isAnnualPlan}) {

  return(
    <div style={{display: 'flex', justifyContent: 'space-between'}} className="addon-summary-detail">
      <Text className="greyed">{name}</Text>
      <Text>
        {
          isAnnualPlan ?
          `+$${monthCost * 10}/yr`
          :
          `+$${monthCost}/mo`
        }
      </Text>
    </div>
  )

}

export default AddOnSummary;