import React from 'react'
import { Outlet } from 'react-router-dom'
import { Flex } from '@chakra-ui/react'

import BackNavigation from '../components/BackNavigation'

export default function NavigationStructure () {
  return (
    <Flex id="navigation-structure"
      display="flex"
      flexDirection='column'
      width='100%'
    >
      <BackNavigation
        marginBottom="1rem"
        height="35px"
      />
      <Flex
        height='calc(100% - (35px + 1rem))'
        className="page"
      >
        <Outlet />
      </Flex>
    </Flex>
  )
}
