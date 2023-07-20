import React from "react";
import { useDispatch } from "react-redux";
import formSlice from "../../../redux/formSlice";

import { FormControl, FormLabel, Input, NumberInput, NumberInputField } from "@chakra-ui/react";

function PersonalInfo() {

  const dispatch = useDispatch();
  const {setName, setEmail, setPhone} = formSlice.actions;

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value))
  };

  const handleEmailChange = (event) => {
    dispatch(setEmail(event.target.value))
  };

  const handlePhoneChange = (event) => {
    dispatch(setPhone(event.target.value))
  }

  return(
    <div className="form-step-container">
      <FormControl onChange={handleNameChange}>
        <FormLabel>Name</FormLabel>
        <Input type='text' placeholder="e.g. Stephen King"/>
      </FormControl>
      <br/>
      <FormControl onChange={handleEmailChange}>
        <FormLabel>Email Address</FormLabel>
        <Input type='email' placeholder="e.g. stephenking@lorem.com"/>
      </FormControl>
      <br/>
      <FormControl onChange={handlePhoneChange}>
        <FormLabel>Phone Number</FormLabel>
        <NumberInput>
          <NumberInputField placeholder="e.g. 123 456 7890"/>
        </NumberInput>
      </FormControl>
    </div>
  )

}

export default PersonalInfo;