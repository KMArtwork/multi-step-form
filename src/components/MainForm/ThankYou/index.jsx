import React from "react";
import { Heading, Circle, Image, Center, Text } from '@chakra-ui/react'

import ThankYouIcon from '../../../assets/images/icon-thank-you.svg'

function ThankYou() {

  return(
    <Center className='form-step-container thankYou'>
      <Circle>
        <Image 
          src={ThankYouIcon}
          alt='checkmark thank you icon'
        />
      </Circle>
      <Heading>Thank you!</Heading>
      <Text className="greyed">Thank you for confirming your subscription! We hope you have fun using our platform! If you ever need support, please feel free to email us at support@loremgaming.com</Text>
    </Center>
  )

}

export default ThankYou;