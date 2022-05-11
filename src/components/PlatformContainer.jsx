import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'

import NavbarBottom from './NavbarBottom'
import BackNavigation from './BackNavigation'

export default function PlatformContainer (props) {
  return (
    <Flex id="platform-container"
      display="flex"
      flexDirection='column'
      width='100%'
    >
      {props.backNavigation &&
        <BackNavigation
          marginBottom="1rem"
          height="35px"
        />
      }
      <Flex
        height='calc(100% - (35px + 1rem))'
        className="page"
        overflow='scroll'
        alignSelf='center'
        justifyContent='center'
        w='100%'
        mb='74px'
      >
        <Box w='100%' minH='600px'>
          <Outlet />
        </Box>   
      </Flex>
      <NavbarBottom />
    </Flex>
  )
}
