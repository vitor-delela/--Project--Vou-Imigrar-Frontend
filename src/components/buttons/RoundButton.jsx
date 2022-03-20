import React from 'react'
import { Button, Icon } from '@chakra-ui/react'

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

export default function RoundButton (props) {
  const { icon, onClick } = props

  return (
    <Button
      width='50px'
      height='50px'
      bg='primary'
      borderRadius='50%'
      _active={{
        bg: 'primaryHover'
      }}
      _hover={{
        bg: 'primaryHover'
      }}
      id="round-button"
      type="button"
      onClick={onClick}
    >
      {
        icon === 'left' 
          ? <Icon
              as={MdKeyboardArrowLeft}
              width='30px'
              height='30px'
              color='white'
              className="icon" 
            />
          : <Icon
              as={MdKeyboardArrowRight}
              width='25px'
              height='25px'
              color='white'
              className="icon"
            />
      }
    </Button>
  )
}
