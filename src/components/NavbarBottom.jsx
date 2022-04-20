import { Flex } from '@chakra-ui/react'
import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { MdHome, MdPerson } from 'react-icons/md'

export default function NavbarBottom () {
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
      <MdPerson color='white' fontSize={32} />
    </Flex>
  )
}
