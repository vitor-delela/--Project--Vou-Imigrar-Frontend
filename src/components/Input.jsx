import React from 'react'
import { Input } from '@chakra-ui/react'

export default function InputUI (props) {
  return (
    <Input
      width='100%'
      height='50px'
      bg='background'
      borderRadius='14px'
      margin='3px 0px'
      border='none'
      color='black'
      _active={{
        border: 'none'
      }}
      _focus={{
        border: 'none'
      }}
      _placeholder={{
        color: 'black'
      }}
      className="input"
      {...props}
    />
  )
}
