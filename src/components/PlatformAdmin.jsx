import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Flex, MenuList, MenuButton, Menu, MenuItem } from '@chakra-ui/react'

import { BiDotsHorizontalRounded } from 'react-icons/bi'

export default function PlatformContainer (props) {
  return (
    <Flex
      id="platform-admin"
      top={0}
      position={'absolute'}
      display="flex"
      flexDirection="row"
      height={'100%'}
      width={'100%'}
    >
      <Box height={'100%'} width={'40px'} bgColor={'purple'}>
        <Menu >
          <MenuButton aria-label={'Menu'} bgColor={'purple'} color={'white'}>
            <BiDotsHorizontalRounded height={'100%'} fontSize={38}/>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box
        height="100%"
        w="100%"
      >
        <Outlet />
      </Box>
    </Flex>
  )
}
