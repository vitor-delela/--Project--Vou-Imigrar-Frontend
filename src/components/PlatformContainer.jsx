import React from 'react'
import { Outlet } from 'react-router-dom'
import {Flex} from '@chakra-ui/react'

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
        overflow='auto'
        alignSelf='center'
      >
        <Outlet />
      </Flex>
      <NavbarBottom />
    </Flex>
  )
}
