import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Box, Flex, Grid, FormControl, useToast } from '@chakra-ui/react'
import InputMask from "react-input-mask"
import { verifyName, verifyEmail } from '../utils/function'

import Logo from '../components/Logo'
import Input from '../components/Input'
import RoundButton from '../components/buttons/RoundButton'

import { setPage } from '../store/pageSlice'
import { signUp, signIn, selectUser } from '../store/userSlice'

const stepStyle = {
  width:'16px', 
  height:'16px', 
  minWidth: 'unset', 
  p: 'unset'
}

export default function SignUp () {
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

  useEffect(() => {
    dispatch(setPage('Inscrever-se'))
  })
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [actualPage, setActualPage] = useState(0)
  const [name, setName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [birth, setBirth] = useState('')
  const [tel, setTel] = useState('')
  
  const login = async () => {
    console.log(email, password, confirmPassword);
  }

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      login()
    }
  }

  const validateAndSignUp = async () => {
    if(actualPage==0) {
      if (name == '' || birth == '') {
        if (toast.isActive('blankFields')) return
        toast({
          id: 'blankFields',
          description: "É obrigatório informar o nome e a data de nascimento.",
        })
        return false
      } else if(birth.length < 10){
        if (toast.isActive('invalidBirth')) return
        toast({
          id: 'invalidBirth',
          description: "A data de nascimento informada não é válida.",
        })
        return false
      }else if (!verifyName(name)) {
        if (toast.isActive('invalidName')) return
        toast({
          id: 'invalidName',
          description: "O nome informado não é válido, insira o nome completo.",
        })
        return false
      }
    }else if(actualPage==1) {
      if (tel == '' || email == '') {
        if (toast.isActive('blankFields')) return
        toast({
          id: 'blankFields',
          description: "É obrigatório informar celular e e-mail.",
        })
        return false
      } else if(tel.length < 13){
        if (toast.isActive('invalidPhone')) return
        toast({
          id: 'invalidPhone',
          description: "O celular informado não é válido.",
        })
        return false
      }else if (!verifyEmail(email)) {
        if (toast.isActive('invalidEmail')) return
        toast({
          id: 'invalidEmail',
          description: "O e-mail informado não é válido.",
        })
        return false
      }
    }else if(actualPage==2) {
      if(password == '' || confirmPassword == '') {
        if (toast.isActive('blankFields')) return
        toast({
          id: 'blankFields',
          description: "É obrigatório informar a senha.",
        })
        return false
      }else if(password != confirmPassword){
        if (toast.isActive('equalPassword')) return
        toast({
          id: 'equalPassword',
          description: "As senhas devem ser iguais.",
        })
        return false
      }
    }
    if(actualPage == 2){
      await dispatch(signUp({ name, birth, tel, email, password }))
      await dispatch(signIn({ email, password }))
      navigate('/home')
    }else {
      setActualPage(actualPage+1)
    }
    
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
          <FormControl>
            <Input
              type="text"
              onKeyPress={pressKey}
              placeholder="Data de Nascimento"
              as={InputMask} mask="99/99/9999" 
              maskChar={null}
              value={birth}
              onChange={(e) => setBirth(e.target.value)}
            />
          </FormControl>
          
        </Grid>

        <Grid w="100%" hidden={!(actualPage == 1)} mb={8}>
          <FormControl>
            <Input
              type="tel"
              onKeyPress={pressKey}
              placeholder="Celular"
              as={InputMask} mask="99 99999-9999"
              maskChar={null}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
          </FormControl>
          
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
            type="password"
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
          <RoundButton onClick={() => {validateAndSignUp()}}/> 
        ) : (
          <RoundButton icon="done" isDisabled={selectUser.status ==='loading'} onClick={() => {validateAndSignUp()}} borderRadius='60%' w='fit-content'/>
        )}
      </Flex>
      
    </Flex>
  )
}