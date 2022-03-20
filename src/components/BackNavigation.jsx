import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, Heading, Icon } from '@chakra-ui/react'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { useSelector } from 'react-redux'

export default function BackNavigation () {
  const navigate = useNavigate()
  const { page } = useSelector((state) => state.page)

  return (
    <Flex
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="35px"
      id="back-navigation"
    >
      <Icon
        as={MdKeyboardArrowLeft}
        width='25px'
        height='25px'
        color='purple'
        cursor='pointer'
        className="arrow" 
        onClick={() => navigate(-1)} 
      />
      <Heading 
        as="h1"
        size='s'
        fontWeight='light'
        className="title"
      >
        {page}
      </Heading>
      <div></div>
    </Flex>
  )
}
