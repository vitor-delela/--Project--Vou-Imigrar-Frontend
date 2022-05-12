import React from 'react'
import { Image, Flex, Text, Box } from '@chakra-ui/react'

export default function CountryCard (props) {

  const getColor = (percentage) => {
    if (percentage <= 25)
      return 'rgba(255, 0, 0, 0.83)';
    else if (percentage <= 50)
      return 'rgba(236, 142, 0, 0.83)';
    else if (percentage <= 75)
      return 'rgba(215, 220, 6, 0.78)';
    else
      return 'rgba(37, 211, 102, 0.66)';
  }

  return(
    <Flex 
      onClick={props.onClick}
      borderRadius="20px" 
      h="200px" 
      w="90vw" 
      justifyContent="space-between" 
      flexDirection="column" 
      bgImage={props.src} 
      bgPosition="top" 
      bgRepeat="no-repeat" 
      bgSize="cover"
      marginBottom={3}
    >
      <Box h="150px"/>
      
      <Flex h="40%" alignItems="center" justifyContent="space-evenly" borderRadius="0 0 20px 20px" bgGradient='linear(to-l, #01A3DE, #6655D4)' >
        <Flex w="70%" flexDirection="column">
          <Text textAlign="left" paddingLeft={4} fontSize={24} color="white" fontWeight="bold">
            {props.name}
          </Text>
          <Text paddingLeft={4} fontSize={14} color="white" maxWidth='80%' mt='-5px'>
            Clique para mais informações sobre este país 
          </Text>
        </Flex>
        <Flex h="65%" w="15%" borderRadius={10} justifyContent="center" alignItems="center" bgColor={getColor(props.percentage)}>
          <Text fontWeight="bold" fontSize={17} color="white">
            {props.percentage}%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
