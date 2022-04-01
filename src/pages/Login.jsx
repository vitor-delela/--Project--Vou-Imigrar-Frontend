import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Flex } from '@chakra-ui/react'

import Logo from '../components/Logo'
import Input from '../components/Input'
import PrimaryButton from '../components/buttons/PrimaryButton'
import TextButton from '../components/buttons/TextButton'

import { setPage } from '../store/pageSlice'
import ErrorLabel from '../components/ErrorLabel'

export default function Login () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Entrar no aplicativo'))
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [errorMessage, setErrorMessage] = useState('')
  const [shouldDisplayError, setShouldDisplayError] = useState(false)

  const login = async () => {
    console.log(email, password);
  }

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  const areInputsValid = () => {
    if (email == '' || password == '') {
      setErrorMessage('É obrigatório informar e-mail e senha')
      setShouldDisplayError(true);
      return;
    }
    if (!email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setErrorMessage('O e-mail informado é inválido')
      setShouldDisplayError(true);
      return;
    }
    login();
  }

  return (
    <Flex id="login" className="center">
      <Logo marginBottom='20px'/>
      <ErrorLabel message={errorMessage} shouldDisplay={shouldDisplayError} />
      <Input
        type="text"
        onKeyPress={pressKey}
        placeholder="E-mail"
        value={email}
        onChange={(e) => {setEmail(e.target.value); if (email != '' && password != '') setShouldDisplayError(false)}}
      />
      <Input
        type="password"
        onKeyPress={pressKey}
        placeholder="Senha"
        value={password}
        onChange={(e) => {setPassword(e.target.value); if (email != '' && password != '') setShouldDisplayError(false)}}
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
