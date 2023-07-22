import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, Image, Text } from "@chakra-ui/react";

function PlanCard({icon, title, monthCost, isAnnual, setPlan}) {

  const state = useSelector(state => state.form);

  const handleClick = (event) => {
    const planCards = document.getElementsByClassName('selected');

    for(const plan of planCards){
      plan.classList.remove('selected');
    }

    event.currentTarget.classList.add('selected')
    setPlan();
  }

  useEffect(() => {
    if(state.plan.name === title){
      const thisCard = document.getElementById(title);
      thisCard.classList.add('selected');
    }
  }, []) //eslint-disable-line

  return(
    <Card size={'lg'} className='plan-card' id={title} onClick={handleClick}>
      <CardBody className='plan-card-body'>
        <Image 
          src={icon}
        />

        <div className="plan-card-details">
          <Text className="bold">{title}</Text>
          <Text className="greyed">
            {isAnnual ? 
            `$${monthCost * 10}/yr`
            :
            `$${monthCost}/mo`
            }
          </Text>
          <Text hidden={isAnnual ? false : true}>2 months free</Text>
        </div>
      </CardBody>
    </Card>
  )

}

export default PlanCard;