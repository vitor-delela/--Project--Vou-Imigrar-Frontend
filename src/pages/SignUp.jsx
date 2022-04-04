import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Flex, Grid } from '@chakra-ui/react'
import { useIMask } from "react-imask"

import Logo from '../components/Logo'
import Input from '../components/Input'
import RoundButton from '../components/buttons/RoundButton'

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
  const [password, setPassword] = useState('')
  const [secondHidden, setSecondHidden] = useState(true)
  const{birthRef}= useIMask(
    {
      mask: "00/00/0000"
    }
  );

  const login = async () => {
    console.log(email, password);
  }

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      login()
    }
  }
  
  const nextStep = () => {
    setSecondHidden(false)
  }

  return (
    <Flex id="login" className="center">
      <Logo/>
      <Box w='100%' mt={8} mb={24}>
        <Grid w="100%" hidden={!secondHidden}>
          <Input
            type="text"
            onKeyPress={pressKey}
            placeholder="Nome Completo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="text"
            ref={birthRef}
            onKeyPress={pressKey}
            placeholder="Data de Nascimento"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="tel"
            onKeyPress={pressKey}
            placeholder="Celular"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>

        <Grid w="100%" hidden={secondHidden}>
          <Input
            type="email"
            onKeyPress={pressKey}
            placeholder="E-mail"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            onKeyPress={pressKey}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Input
            type="password"
            onKeyPress={pressKey}
            placeholder="Confirmar Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
      </Box>
      

      <Flex justifyContent='space-between' alignItems='center' w={36}>
        <RoundButton hasIcon={false} buttonStyle={{...stepStyle, bg: secondHidden ? 'lightBlue' : 'black'}} onClick={()=> setSecondHidden(true)}/>  
        <RoundButton hasIcon={false} buttonStyle={{...stepStyle, bg: secondHidden ? 'black' : 'lightBlue'}} onClick={nextStep}/>
        <RoundButton onClick={nextStep}/>
      </Flex>
      
      
      
    </Flex>
  )
}
