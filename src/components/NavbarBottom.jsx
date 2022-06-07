import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { SlideFade } from '@chakra-ui/react'

import { BiWorld } from 'react-icons/bi'
import { MdHome, MdPerson } from 'react-icons/md'
import { Button, Flex, Stack, Box } from '@chakra-ui/react'

export default function NavbarBottom () {
  const navigate = useNavigate()
  const location = useLocation()
  const selectedLine = <SlideFade in={true}><Box width={6} height='2px' bg='white' /></SlideFade>

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
      <Button bg='transparent' color='white' fontSize={32} onClick={() => { navigate('/country-matches') }} >
        {
          location.pathname == '/country-matches'
          ? <Stack spacing='5px' align='center'>
              <BiWorld fontSize={36} /> {selectedLine}
            </Stack>
          : <BiWorld opacity={0.7} />
        }
      </Button>
      <Button bg='transparent' color='white' fontSize={32} onClick={() => { navigate('/home') }}>
        {
          location.pathname == '/home'
          ? <Stack spacing='5px' align='center'>
              <MdHome fontSize={36} /> {selectedLine}
            </Stack>
          : <MdHome opacity={0.7} />
        }
      </Button>
      <Button bg='transparent' color='white' fontSize={32} onClick={() => { navigate('/profile') }}>
        {
          location.pathname == '/profile'
          ? <Stack spacing='5px' align='center'>
              <MdPerson fontSize={36} /> {selectedLine}
            </Stack>
          : <MdPerson opacity={0.7} />
        }
      </Button>
    </Flex>
  )
}
