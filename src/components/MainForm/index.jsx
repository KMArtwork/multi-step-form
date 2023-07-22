import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../redux/formSlice";
import { Container, Text, Heading, Button } from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

function MainForm() {

  const state = useSelector(state => state.form);
  const dispatch = useDispatch();
  const { setFormIdx } = formSlice.actions

  const [formTitle, setFormTitle] = useState('Personal Info');
  const [formSubTitle, setFormSubTitle] = useState('Please provide your name, email address, and phone number');

  const handleChangeFormIdx = (idx) => {
    switch(idx){
      case 0:
        setFormTitle('Personal Info');
        setFormSubTitle('Please provide your name, email address, and phone number.')
        break;
      case 1:
        setFormTitle('Select your plan');
        setFormSubTitle('You have the option of monthly or yearly billing.');
        break;
      case 2:
        setFormTitle('Pick add-ons');
        setFormSubTitle('Add-ons help enahnce your gaming experience.')
        break;
      case 3:
        setFormTitle('Finishing up');
        setFormSubTitle('Double-check everything looks OK before confirming.');
        break;
      case 4:
        break;
      default:
        console.error('Error changing pages on form');
    }
    dispatch(setFormIdx(idx));
  }

  return(
    <div id="form-wrapper">
      <Container maxW={'xl'} id='form-container'>
        <div id='form-header'>
          <Heading as={'h3'} id='form-title' visibility={state.formIdx >= 4 ? 'hidden': 'visible'}>{formTitle}</Heading>
          <Text id='form-subtitle' visibility={state.formIdx >= 4 ? 'hidden': 'visible'}>{formSubTitle}</Text>
        </div>
        <br/>
        <div id='form-body'>
          {
            state.formIdx === 0 ?
            <PersonalInfo />
            :
            state.formIdx === 1 ?
            <SelectPlan />
            :
            state.formIdx === 2 ?
            <AddOns />
            :
            state.formIdx === 3 ?
            <Summary changePlan={() => setFormIdx(1)}/>
            :
            state.formIdx === 4 ?
            <ThankYou />
            :
            <p>Oh no you broke it</p>
          }
        </div>
        <br/>
      </Container>
      <div id='form-buttons' hidden={state.formIdx >= 4 ? true : false}>
        <Button id='go-back-button' onClick={() => handleChangeFormIdx(state.formIdx - 1)} visibility={state.formIdx > 0 ? 'visible' : 'hidden'}>Go Back</Button>
        <Button 
          id='next-step-button' 
          onClick={() => handleChangeFormIdx(state.formIdx + 1)} 
          className={state.formIdx === 3 ? 'purple' : null}
          isDisabled={
            state.formIdx === 0 ?
              (state.validation.name && state.validation.email && state.validation.phone) ? 
                false
              :
                true
            :
            state.formIdx === 1 ?
              state.validation.plan ?
                false
              :
                true
            :
            false
          }
        >
          {
            state.formIdx === 3 ?
            'Confirm'
            :
            'Next Step'
          }
        </Button>
      </div>
    </div>
  )

}

export default MainForm;