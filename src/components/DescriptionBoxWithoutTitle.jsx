import React from 'react'
import { Box, Text, Center } from '@chakra-ui/react'

export default function DescriptionBoxWithoutTitle (props) {
  console.log("Tamanho: "+ props.text.length)
  return (
    <Box background='rgba(109, 79, 211, 0.05)' borderRadius='10px' style={{marginTop: '20px'}} 
          //width='40vw'
          > 
      <Center>
      <Text padding='4' fontWeight={props.fontWeight}>
        {props.text}
      </Text>
      </Center>
    </Box>
  )
}
