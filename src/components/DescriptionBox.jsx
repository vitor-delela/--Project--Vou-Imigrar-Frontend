import React from 'react'
import { Box, Text, Center, Divider } from '@chakra-ui/react'

export default function DescriptionBox (props) {
  return (
    <Box
      background='rgba(109, 79, 211, 0.05)'
      borderRadius='10px'
    >
      <Text 
        fontWeight='bold'
        padding='15px'
        fontSize='18'
      >
        Descrição
      </Text>
      <Divider />
      <Center>
      <Text
        padding='15'
        minHeight='100px'
      >
        {props.text}
      </Text>
      </Center>
    </Box>
  )
}
