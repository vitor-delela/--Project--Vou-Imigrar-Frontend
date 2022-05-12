import React from 'react'
import { Button, Icon } from '@chakra-ui/react'

import { MdDone, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'

const getIcon = (icon) => {
  if (icon == 'done') {
    return MdDone;
  }
  if (icon == 'left') {
    return MdKeyboardArrowLeft;
  }
  return MdKeyboardArrowRight;
}

export default function RoundButton (props) {
  const { hasIcon, icon, buttonStyle, onClick } = props

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
      sx={buttonStyle}
    >
      { hasIcon ?? (
        <Icon
          as={getIcon(icon)}
          width='30px'
          height='30px'
          color='white'
          className="icon"
        />
      )
      }
    </Button>
  )
}
