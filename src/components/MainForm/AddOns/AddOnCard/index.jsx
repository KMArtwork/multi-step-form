import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../../../redux/formSlice";

import { Card, CardBody, Checkbox, Text } from "@chakra-ui/react";

function AddOnCard({title, subtitle, monthCost, checked}) {

  const state = useSelector(state => state.form);
  const dispatch = useDispatch();
  const { setAddOns } = formSlice.actions;

  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (event) => {
    setIsChecked(!event.currentTarget.querySelector('input').checked);
    dispatch(setAddOns({
      title: title,
      isChecked: !event.currentTarget.querySelector('input').checked,
    }))
  }

  useEffect(() => {
    setIsChecked(state.addons[title].isAdded)
  }, []) //eslint-disable-line

  return(
    <Card className={isChecked ? 'checked addon-card' : 'addon-card'} onClick={handleClick}>
      <CardBody className="addon-option-card-body">
        <Checkbox isChecked={checked}/>
        <div className="addon-details">
          <div className='addon-text'>
            <Text className="bold">{title}</Text>
            <Text className="greyed">{subtitle}</Text>
          </div>
          <div className="addon-cost">
            <Text>
              {
                state.isAnnualPlan ?
                `+$${monthCost * 10}/yr`
                :
                `+$${monthCost}/mo`
              }
            </Text>
          </div>
        </div>
      </CardBody>
    </Card>
  )

}

export default AddOnCard;