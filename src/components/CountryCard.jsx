import React from 'react'
import { Flex, Text, Box, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export default function CountryCard(props) {
  const getColor = (percentage) => {
    if (percentage <= 25) { return 'rgba(255, 0, 0, 0.83)' } else if (percentage <= 50) { return 'rgba(236, 142, 0, 0.83)' } else if (percentage <= 75) { return 'rgba(215, 220, 6, 0.78)' } else { return 'rgba(37, 211, 102, 0.66)' }
  }

  return (
    <Flex
      onClick={props.onClick}
      borderRadius={20}
      h="200px"
      w="100%"
      mb={8}
      justifyContent="space-between"
      flexDirection="column"
      bgImage={props.src}
      bgPosition="top"
      bgRepeat="no-repeat"
      bgSize="cover"
      opacity={props.opacity || 1}
    >
      <Box h="150px" />
      <Flex
        minH="40%"
        alignItems="center"
        justifyContent="space-evenly"
        borderRadius="0 0 20px 20px"
        bg="primary"
      >
        <Flex w="70%" flexDirection="column" pb={2}>
          <Text textAlign="left" paddingLeft={4} fontSize={22} color="white" fontWeight="extrabold">
            {props.name}
          </Text>
          <Text paddingLeft={4} fontSize={12} color="white" maxWidth='80%'>
            Clique para mais informações sobre este país
          </Text>
        </Flex>
        {props.circular
          ? (
            <CircularProgress value={props.percentage} color="green" size={16}>
              <CircularProgressLabel color="white" fontSize={16}>{props.percentage}%</CircularProgressLabel>
            </CircularProgress>
            )
          : (
            <Flex h="65%" w="15%" borderRadius={10} justifyContent="center" alignItems="center" bgColor={getColor(props.percentage)}>
              <Text fontWeight="bold" fontSize={17} color="white">
                {props.percentage}%
              </Text>
            </Flex>
            )}
      </Flex>
    </Flex>
  )
}
