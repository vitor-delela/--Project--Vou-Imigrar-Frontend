import React from 'react'
import { Outlet } from 'react-router-dom'
import { Box, Flex, MenuList, MenuButton, Menu, MenuItem, IconButton } from '@chakra-ui/react'

import { BiDotsVerticalRounded } from 'react-icons/bi'

export default function PlatformContainer(props) {
  return (
    <Flex
      id="platform-admin"
      position={"absolute"}
      display="flex"
      flexDirection="column"
      height={"100%"}
      width={"100%"}
    >
      <Box height={'100%'} width={'40px'} bgColor={'purple'}>
        <Menu>
          <MenuButton as={IconButton} aria-label={'Menu'} icon={BiDotsVerticalRounded} bgColor={'purple'} color={'white'}>
            Actions
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
      <Flex
        height="calc(100% - (35px + 1rem))"
        className="page"
        overflow="scroll"
        alignSelf="center"
        justifyContent="center"
        w="100%"
        mb="74px"
      >
        <Box w="100%" h="100%">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  )
}
