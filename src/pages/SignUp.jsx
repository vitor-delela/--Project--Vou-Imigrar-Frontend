import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Flex, Grid } from '@chakra-ui/react'
import { useIMask } from "react-imask"


import Logo from '../components/Logo'
import Input from '../components/Input'
import RoundButton from '../components/buttons/RoundButton'
import PrimaryButton from '../components/buttons/PrimaryButton'

import { setPage } from '../store/pageSlice'

const stepStyle = {
  width:'16px', 
  height:'16px', 
  minWidth: 'unset', 
  p: 'unset'
}

export default function SignUp () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Inscrever-se'))
  })
  
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [password, setPassword] = useState('')
  const [actualPage, setActualPage] = useState(0)
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const{birthRef}= useIMask(
    {
      mask: "00/00/0000"
    }
  )
  
  const login = async () => {
    console.log(email, password, confirmPassword);
  }

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  const areInputsValid = async () => {
    toast.closeAll();
    if (email == "" || tel == "") {
      toast({
        title: 'Campos inválidos',
        description: "O e-mail informado não é válido.",
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

    await dispatch(signIn({ email }))
  }

  
 

  return (
    <Flex id="login" className="center">
      <Logo/>
      <Box w='100%' mt={8} mb={16}>
        <Grid w="100%" hidden={!(actualPage == 0)} mb={8}>
          <Input
            type="text"
            onKeyPress={pressKey}
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            ref={birthRef}
            onKeyPress={pressKey}
            placeholder="Data de Nascimento"
            value={birthRef}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>

        <Grid w="100%" hidden={!(actualPage == 1)} mb={8}>
          <Input
            type="tel"
            onKeyPress={pressKey}
            placeholder="Celular"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <Input
            type="email"
            onKeyPress={pressKey}
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>

        <Grid w="100%" hidden={!(actualPage == 2)} mb={8}>
          <Input
            type="password"
            onKeyPress={pressKey}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="confirmPassword"
            onKeyPress={pressKey}
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </Grid>
      </Box>
      
      

      <Flex gap={8} justifyContent='center' alignItems='center' w="100%">
        {actualPage != 0 && (<RoundButton icon="left" onClick={() => {setActualPage(actualPage-1)}}/>)}
        <RoundButton hasIcon={false} buttonStyle={{...stepStyle, bg: actualPage == 0 ? 'lightBlue' : 'black'}} onClick={() => {setActualPage(0)}}/>  
        <RoundButton hasIcon={false} buttonStyle={{...stepStyle, bg: actualPage == 1 ? 'lightBlue' : 'black'}} onClick={() => {setActualPage(1)}}/>
        <RoundButton hasIcon={false} buttonStyle={{...stepStyle, bg: actualPage == 2 ? 'lightBlue' : 'black'}} onClick={() => {setActualPage(2)}}/>
        {actualPage != 2 ? (
          <RoundButton onClick={() => {setActualPage(actualPage+1)}}/> 
        ) : (
          <RoundButton icon="done" onClick={() => {''}} borderRadius='60%' w='fit-content'/>
        )}
      </Flex>
      
      
      
    </Flex>
  )
}
