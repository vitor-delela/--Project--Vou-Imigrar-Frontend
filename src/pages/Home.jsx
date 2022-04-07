import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Heading, Box, Text, Flex, Image, HStack } from '@chakra-ui/react'

import Logo from '../components/Logo'

import NavbarBottom from '../components/NavbarBottom'
import PrimaryButton from '../components/buttons/PrimaryButton'

export default function Home () {
  const navigate = useNavigate()

  return (
    <>
      <Heading position='absolute' top={0}>
        <Logo h={12} w='auto'/>
      </Heading>

      <Flex id="home" flexDirection='column' justifyContent='space-around' mt={12} mb={20}>
        <HStack w='90vw' spacing={4} overflow='auto' whiteSpace='nowrap' alignSelf='center'>
          {[0,1,2].map((tip) => {
            return (
              <Flex key={tip} py={8} px={6} bg='background' borderRadius={8} alignItems='center' justifyContent='center'>
                <Text>DICA Lorem ipsum Lorem ipsum</Text>
              </Flex>
            )
          })}
        </HStack>
        

        <Box w='100%' px={8}>
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

        <Box px={4}>
          <PrimaryButton borderRadius={8}>
            Iniciar mapeamento
          </PrimaryButton>
        </Box>
        

        <NavbarBottom />
      </Flex>
    </>
  )
}
