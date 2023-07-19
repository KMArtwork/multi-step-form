import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../../../redux/formSlice";

import { Card, CardBody, Checkbox, Text } from "@chakra-ui/react";

function AddOnCard({title, subtitle, moCost, checked}) {

  const state = useSelector(state => state.form);
  const dispatch = useDispatch();
  const {setAddOns, setTotalCost} = formSlice.actions;

  const [isChecked, setIsChecked] = useState(false);

  const handleAddOption = (event) => {
    setIsChecked(event.target.checked);
    dispatch(setAddOns({
      title: title,
      isChecked: event.target.checked
    }))

    event.target.checked ?
    dispatch(setTotalCost(0 + moCost))
    :
    dispatch(setTotalCost(0 - moCost))
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
                `+$${moCost * 10}/yr`
                :
                `+$${moCost}/mo`
              }
            </Text>
          </div>
        </div>
      </CardBody>
    </Card>
  )

}

export default AddOnCard;