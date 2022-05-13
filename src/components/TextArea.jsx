import React from 'react'
import { Textarea } from '@chakra-ui/react'

export default function InputUI (props) {
  return (
    <Textarea
      className='textarea'
      size='sm'
      p='20px'
      bg='background'
      borderRadius='14px'
      margin='5px 0px'
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
      {...props}
    />
  )
}
