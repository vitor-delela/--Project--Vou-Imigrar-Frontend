import React from 'react'
import { useNavigate } from 'react-router-dom'

import { BiWorld } from 'react-icons/bi'
import { MdHome, MdPerson } from 'react-icons/md'
import { Button, Flex } from '@chakra-ui/react'

export default function NavbarBottom () {
  const navigate = useNavigate()

  return (
    <Flex
      w='100vw'
      bottom={0}
      left={0}
      pt={4}
      pb={4}
      px={12}
      position='absolute'
      justifyContent='space-around'
      alignItems='top'
      bg='purple'
    >
      <Button background='transparent' onClick={() => { navigate('/country-matches') }}>
        <BiWorld color='white' fontSize={32} />
      </Button>
      <Button background='transparent' onClick={() => { navigate('/home') }}>
        <MdHome color='white' fontSize={32} />
      </Button>
      <Button background='transparent' onClick={() => { navigate('/profile') }}>
        <MdPerson color='white' fontSize={32} />
      </Button>
    </Flex>
  )
}
