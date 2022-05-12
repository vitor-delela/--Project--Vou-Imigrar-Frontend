import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading, Box, Text, Flex, Image, HStack } from '@chakra-ui/react'

import Logo from '../components/Logo'
import PrimaryButton from '../components/buttons/PrimaryButton'

export default function Home () {
  const navigate = useNavigate()

  return (
    <Flex id="home" flexDirection='column' justifyContent='space-between' alignItems='center' h='100%'>
      <Heading alignSelf='center'>
        <Logo h={12} w='auto'/>
      </Heading>

      <HStack maxW='90vw' spacing={4} overflow='auto' whiteSpace='nowrap' alignSelf='center'>
        {[0, 1, 2].map((tip) => {
          return (
            <Flex key={tip} py={8} px={6} bg='background' borderRadius={8} alignItems='center' justifyContent='center'>
              <Text>DICA Lorem ipsum Lorem ipsum</Text>
            </Flex>
          )
        })}
      </HStack>

      <Box w={['100%', null, '50%']} px={8}>
        <Image
          width='100%'
          height='auto'
          objectFit='cover'
          src='../src/assets/girl-with-map.png'
          alt='Garota com mapa'
          id='girl-with-map'
          mb={14}
        />

        <Text textAlign='center' fontSize={18}>
          Complete o mapeamento do seu perfil para poder ter acesso às funcoionalidades da aplicação
        </Text>
      </Box>

      <Box px={4} w='100%'>
        <PrimaryButton borderRadius={8} onClick={() => navigate('/map-profile')}>
          Iniciar mapeamento
        </PrimaryButton>
      </Box>
    </Flex>
  )
}
