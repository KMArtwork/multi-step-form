import React from "react";

import { Card, CardBody,} from '@chakra-ui/react';
import Sidebar from "../Sidebar";


function FormCard() {

  return(
    <Card>
      <CardBody>
        <Sidebar />
      </CardBody>
    </Card>
  )

}

export default FormCard;