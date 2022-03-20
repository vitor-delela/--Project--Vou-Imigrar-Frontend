import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Flex } from '@chakra-ui/react'

import Logo from '../components/Logo'
import Input from '../components/Input'
import PrimaryButton from '../components/buttons/PrimaryButton'
import TextButton from '../components/buttons/TextButton'

import { setPage } from '../store/pageSlice'

export default function Login () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
      login()
    }
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
      <PrimaryButton marginTop='20px' onClick={login}>
        Entrar
      </PrimaryButton>
      <TextButton onClick={() => { navigate('/forget') }}>
        Esqueci a senha
      </TextButton>
    </Flex>
  )
}
