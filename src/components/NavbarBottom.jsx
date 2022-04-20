import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BiWorld } from 'react-icons/bi'
import { MdHome, MdPerson } from 'react-icons/md'
import { Flex } from '@chakra-ui/react'


export default function NavbarBottom () {
  const navigate = useNavigate()

  return (
    <Flex
      w='100vw'
      bottom={0}
      left={0}
      pt={4}
      pb={6}
      px={12}
      position='absolute'
      justifyContent='space-around'
      alignItems='top'
      bg='purple'
    >
      <BiWorld color='white' fontSize={32} />
      <MdHome color='white' fontSize={32} />
      <MdPerson color='white' fontSize={32} onClick={() => { navigate('/profile') }}/>
    </Flex>
  )
}
