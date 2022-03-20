import React from 'react'
import { Flex, Button, Icon } from '@chakra-ui/react'

import { MdOpenInNew } from 'react-icons/md'

export default function TextButton (props) {
  return (
    <Flex
      display="flex"
      alignItems="center"
      border="none"
      bg="none"
      id="text-button"
    >
      <Button
        variant='link'
        color='black'
        fontWeight='light'
        marginRight={1}
        id="text-button"
        {...props}
      />
      <Icon
        as={MdOpenInNew}
        color='black'
        className="icon"
      />
    </Flex>
  )
}
