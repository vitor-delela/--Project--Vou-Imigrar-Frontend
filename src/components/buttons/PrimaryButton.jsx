import React from 'react'
import { Button } from '@chakra-ui/react'

export default function PrimaryButton (props) {
  return (
    <Button
      height='60px'
      width='100%'
      fontSize='md'
      fontWeight='medium'
      bg='purple'
      color='white'
      borderRadius='16px'
      margin='5px 0'
      _active={{
        bg: 'primaryHover'
      }}
      _hover={{
        bg: 'primaryHover'
      }}
      id="primary-button"
      type="button"
      {...props}
    />
  )
}
