import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'

import { Box, Text, Flex, HStack } from '@chakra-ui/react'

export default function Profile () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Voltar'))
  })

  return (
    <Flex>
      <Box>Pessoa</Box>

      <HStack>
        <Text>Item 1</Text>
        <Text>Item 2</Text>
        <Text>Item 3</Text>
        <Text>Item 4</Text>
      </HStack>
    </Flex>
  )
}
