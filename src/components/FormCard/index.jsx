import React from "react";

import { Card, CardBody,} from '@chakra-ui/react';
import Sidebar from "../Sidebar";
import MainForm from "../MainForm";


function FormCard() {

  return(
    <Card id='form-card'>
      <CardBody id='form-card-body'>
        <Sidebar />
        <MainForm />
      </CardBody>
    </Card>
  )

}

export default FormCard;