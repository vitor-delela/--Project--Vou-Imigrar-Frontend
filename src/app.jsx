import React from 'react'
import AppRouter from './router'
import { Flex } from '@chakra-ui/react'

export default function App () {
  return (
    <Flex id="app">
      <AppRouter />
    </Flex>
  )
}
