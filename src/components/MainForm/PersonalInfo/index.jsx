import React from "react";
import { useDispatch, useSelector } from "react-redux";
import formSlice from "../../../redux/formSlice";

import { FormControl, FormLabel, Input, NumberInput, NumberInputField } from "@chakra-ui/react";

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function PersonalInfo() {

  const state = useSelector(state => state.form)
  const dispatch = useDispatch();
  const {setName, setEmail, setPhone, setValidation} = formSlice.actions;

  const handleNameChange = (event) => {
    dispatch(setValidation({
      name: 'name',
      value: event.target.value ? true : false
    }))
    dispatch(setName(event.target.value))
  };

  const handleEmailChange = (event) => {
    const isValid = emailRegex.test(event.target.value);

    dispatch(setValidation({
      name: 'email',
      value: isValid
    }));
    dispatch(setEmail(event.target.value))
  };

  const handlePhoneChange = (event) => {
    dispatch(setValidation({
      name: 'phone',
      value: event.target.value.length === 10 ? true : false
    }))
    dispatch(setPhone(event.target.value))
  }

  return(
    <div className="form-step-container">
      <FormControl onChange={handleNameChange} isRequired >
        <FormLabel>Name</FormLabel>
        <Input type='text' placeholder="e.g. Stephen King" value={state.name}/>
      </FormControl>
      <br/>
      <FormControl onChange={handleEmailChange} isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input type='email' placeholder="e.g. stephenking@lorem.com" value={state.email}/>
      </FormControl>
      <br/>
      <FormControl onChange={handlePhoneChange} isRequired>
        <FormLabel>Phone Number</FormLabel>
        <NumberInput value={state.phone}>
          <NumberInputField placeholder="e.g. 123 456 7890" maxLength={10} minLength={10}/>
        </NumberInput>
      </FormControl>
    </div>
  )

}

export default PersonalInfo;