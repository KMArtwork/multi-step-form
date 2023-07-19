import React from "react";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";

function PlanCard({icon, title, moCost, isAnnual, setPlan}) {

  return(
    <Card size={'lg'} className='plan-card' onClick={setPlan}>
      <CardBody className='plan-card-body'>
        <Image 
          src={icon}
        />

        <div className="plan-card-details">
          <Text className="bold">{title}</Text>
          <Text className="greyed">
            {isAnnual ? 
            `$${moCost * 10}/yr`
            :
            `$${moCost}/mo`
            }
          </Text>
          <Text hidden={isAnnual ? false : true}>2 months free</Text>
        </div>
      </CardBody>
    </Card>
  )

}

export default PlanCard;