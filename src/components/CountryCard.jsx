import React from 'react'
import { Image, Flex, Text, Box } from '@chakra-ui/react'

export default function CountryCard (props) {
  return(
    <Flex 
      borderRadius="30px" 
      h="220px" 
      w="90vw" 
      justifyContent="space-between" 
      flexDirection="column" 
      bgImage={props.src} 
      bgPosition="top" 
      bgRepeat="no-repeat" 
      bgSize="cover">
      {/* <Image 
        width='100vw'
        height='160px'
        objectFit='cover'
        src={props.src}
        alt='Imagem do país'
        borderRadius='10px'
      /> */}
      <Box h="150px"/>
      <Flex h="40%" alignItems="center" justifyContent="space-evenly" borderRadius="0 0 30px 30px" bgGradient='linear(to-l, #01A3DE, #6655D4)' >
        <Flex w="70%" flexDirection="column">
          <Text textAlign="left" paddingLeft={4} fontSize={24} color="white" fontWeight="bold">
            {props.name}
          </Text>
          <Text paddingLeft={4} fontSize={14} color="white">
            Clique para mais informações sobre este país 
          </Text>
        </Flex>
        <Flex h="60%" w="15%" borderRadius={10} justifyContent="center" alignItems="center" bgColor="orange">
          <Text fontSize={20} color="white">
            50%
          </Text>
        </Flex>
      </Flex>
      
    </Flex>
  )
}
