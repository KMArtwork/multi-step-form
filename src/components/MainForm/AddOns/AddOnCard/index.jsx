import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../../../redux/formSlice";

import { Card, CardBody, Checkbox, Text } from "@chakra-ui/react";

function AddOnCard({title, subtitle, monthCost, checked}) {

  const state = useSelector(state => state.form);
  const dispatch = useDispatch();
  const { setAddOns } = formSlice.actions;

  const [isChecked, setIsChecked] = useState(false);

  const handleAddOption = (event) => {
    setIsChecked(event.target.checked);
    dispatch(setAddOns({
      title: title,
      isChecked: event.target.checked,
      // cost: 
      //   event.target.checked ?
      //     state.isAnnualPlan ?
      //       0 + (monthCost * 10)
      //       :
      //       0 + monthCost
      //   :
      //     state.isAnnualPlan ?
      //       0 - (monthCost * 10)
      //       : 
      //       0 - monthCost
    }))
  }

  return(
    <Card className={isChecked ? 'checked addon-card' : 'addon-card'} >
      <CardBody className="addon-option-card-body">
        <Checkbox onChange={handleAddOption} isChecked={checked} />
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