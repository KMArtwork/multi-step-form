import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../redux/formSlice";

import { Container, Text, Heading, Button, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from "@chakra-ui/react";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddOns from "./AddOns";
import Summary from "./Summary";

function MainForm() {

  const [formIdx, setFormIdx] = useState(0);
  const [formTitle, setFormTitle] = useState('Personal Info');
  const [formSubTitle, setFormSubTitle] = useState('Please provide your name, email address, and phone number');

  const handleChangeFormIdx = (idx) => {
    console.log(idx);
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
      default:
        console.error('Error changing pages on form');
    }
    setFormIdx(idx);
  }

  return(
    <Container maxW={'xl'} id='form-container'>
      <Heading as={'h3'} id='form-title'>{formTitle}</Heading>
      <Text id='form-subtitle'>{formSubTitle}</Text>
      <br/>
      {
        formIdx === 0 ?
        <PersonalInfo />
        :
        formIdx === 1 ?
        <SelectPlan />
        :
        formIdx === 2 ?
        <AddOns />
        :
        formIdx === 3 ?
        <Summary />
        :
        <p>Oh no you broke it</p>
      }
      <br/>
      <div id='form-buttons'>
        <Button id='go-back-button' onClick={() => handleChangeFormIdx(formIdx - 1)} visibility={formIdx > 0 ? 'visible' : 'hidden'}>Go Back</Button>
        <Button id='next-step-button' onClick={() => handleChangeFormIdx(formIdx + 1)}>Next Step</Button>
      </div>
    </Container>
  )

}

export default MainForm;