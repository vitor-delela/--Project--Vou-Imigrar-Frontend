import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Flex, Text } from '@chakra-ui/react'

import Logo from '../components/Logo'
import PrimaryButton from '../components/buttons/PrimaryButton'
import TextButton from '../components/buttons/TextButton'

export default function Welcome () {
  const navigate = useNavigate()

  return (
    <Flex
      id='welcome'
      className='center'
    >
      <Logo/>
      <Text
        fontSize='lg'
        fontWeight='medium'
        marginBottom='30px'
      >
        Bem vindo ao <span className='color'>Vou Imigrar</span>, o seu aplicativo para imigrar de país.
      </Text>
      <PrimaryButton onClick={() => { navigate('/signup') }}>
        Inscrever-se
      </PrimaryButton>
      <TextButton onClick={() => { navigate('/login') }}>
        Eu já possuo uma conta
      </TextButton>
    </Flex>
  )
}
