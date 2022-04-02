import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Flex, useToast } from '@chakra-ui/react'

import Logo from '../components/Logo'
import Input from '../components/Input'
import PrimaryButton from '../components/buttons/PrimaryButton'
import TextButton from '../components/buttons/TextButton'
import { verifyEmail } from '../utils/functions'

import { setPage } from '../store/pageSlice'
import { signIn } from '../store/userSlice'

export default function Login () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  useEffect(() => {
    dispatch(setPage('Entrar no aplicativo'))
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 

  const login = async () => {
    console.log(email, password);
  }

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      areInputsValid()
    }
  }

  const areInputsValid = async () => {
    toast.closeAll();
    if (email == '' || password == '') {
      toast({
        title: 'Campos inválidos',
        description: "É obrigatório informar e-mail e senha.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return;
    }
    if (!verifyEmail(email)) {
      toast({
        title: 'Campos inválidos',
        description: "O e-mail informado não é válido.",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      return;
    }
    await dispatch(signIn({ email, password }));
  }

  return (
    <Flex id="login" className="center">
      <Logo marginBottom='20px'/>
      <Input
        type="text"
        onKeyPress={pressKey}
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        onKeyPress={pressKey}
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PrimaryButton marginTop='20px' onClick={areInputsValid}>
        Entrar
      </PrimaryButton>
      <TextButton onClick={() => { navigate('/forget') }}>
        Esqueci a senha
      </TextButton>
    </Flex>
  )
}
