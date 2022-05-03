import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, useToast } from '@chakra-ui/react'

import Logo from '../components/Logo'
import Input from '../components/Input'
import PrimaryButton from '../components/buttons/PrimaryButton'
import TextButton from '../components/buttons/TextButton'
import { verifyEmail } from '../utils/functions'

import { setPage } from '../store/pageSlice'
import { signIn, selectUser, setStatus } from '../store/userSlice'

export default function Login () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast({
    title: 'Campos inválidos',
    position: 'bottom',
    status: 'error',
    duration: 5000,
    isClosable: true,
    containerStyle: {
      width: '400px',
      maxWidth: '90%',
    },
  })
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(setPage('Entrar no aplicativo'))
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      areInputsValid()
    }
  }

  const areInputsValid = async () => {
    if (email == '' || password == '') {
      if (toast.isActive('blankFields')) return
      toast({
        id: 'blankFields',
        description: "É obrigatório informar e-mail e senha.",
      })
      return;
    } else if (!verifyEmail(email)) {
      if (toast.isActive('invalidEmail')) return
      toast({
        id: 'invalidEmail',
        description: "O e-mail informado não é válido.",
      })
      return;
    }
    await dispatch(signIn({ email, password }))
  }

  useEffect(() => {
    if (user.status == 'failed' && !toast.isActive('loginFailed')) {
      toast({
        id: 'loginFailed',
        title: 'Falha ao entrar',
        description: user.error,
      })
      dispatch(setStatus(''))
    } else if (user.status == 'success') {
      navigate('/home')
      dispatch(setStatus(''))
    }
  }, [user])

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
      <PrimaryButton isDisabled={user.status == 'loading'} marginTop='20px' onClick={areInputsValid}>
        Entrar
      </PrimaryButton>
      <TextButton onClick={() => { navigate('/forget') }}>
        Esqueci a senha
      </TextButton>
      {user.email != '' ? `Logado como ${user.email}` : ''}
    </Flex>
  )
}
