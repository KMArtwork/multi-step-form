import React from "react";
import { useSelector, useDispatch } from "react-redux";
import formSlice from "../../../redux/formSlice";

import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, NumberInput, NumberInputField } from "@chakra-ui/react";

function AddOns() {

  const state = useSelector(state => state.form);
  const dispatch = useDispatch();
  const {setAddOns} = formSlice.actions;

  return(
    <div className="form-step-container">
      <p>Add ons here</p>
    </div>
  )

}

export default AddOns;