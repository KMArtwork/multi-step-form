import React from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../../redux/formSlice";
import PlanCard from "./PlanCard";

import Arcade from '../../../assets/images/icon-arcade.svg';
import Advanced from '../../../assets/images/icon-advanced.svg';
import Pro from '../../../assets/images/icon-pro.svg';

import { FormControl, FormLabel, Switch } from "@chakra-ui/react";

function SelectPlan() {

  const state = useSelector(state => state.form);
  const dispatch = useDispatch();
  const {setIsAnnualPlan, setPlan} = formSlice.actions;

  const handleIsAnnualChange = (event) => {
    dispatch(setIsAnnualPlan(event.target.checked))
  };

  const handlePlanChange = (plan, cost) => {
    dispatch(setPlan(plan));
  }

  return(
    <div className="form-step-container">
      <div id='plan-cards'>
        <PlanCard icon={Arcade} title={'Arcade'} monthCost={9} isAnnual={state.isAnnualPlan} setPlan={() => {handlePlanChange({name: 'Arcade', cost: 9})}}/>
        <PlanCard icon={Advanced} title={'Advanced'} monthCost={12} isAnnual={state.isAnnualPlan} setPlan={() => {handlePlanChange({name: 'Advanced', cost: 12})}}/>
        <PlanCard icon={Pro} title={'Pro'} monthCost={15} isAnnual={state.isAnnualPlan} setPlan={() => {handlePlanChange({name: 'Pro', monthCost: 15})}}/>
      </div>

      <FormControl onChange={handleIsAnnualChange} className='plan-select'>
        <FormLabel className={state.plan ? 'greyed' : null}>Monthly</FormLabel>
        <Switch id='plan-select-switch' isChecked={state.isAnnualPlan}/>
        <FormLabel className={state.plan ? null : 'greyed'}>Yearly</FormLabel>
      </FormControl>
    </div>
  )

}

export default SelectPlan;