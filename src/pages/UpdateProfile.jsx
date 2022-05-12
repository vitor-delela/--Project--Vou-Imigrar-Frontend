import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex, Grid, useToast } from '@chakra-ui/react'
import InputMask from 'react-input-mask'
import { verifyName } from '../utils/functions'

import Logo from '../components/Logo'
import Input from '../components/Input'

import { setPage } from '../store/pageSlice'
import { update, selectUser, setStatus } from '../store/userSlice'
import PrimaryButton from '../components/buttons/PrimaryButton'

export default function UpdateProfile () {
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
      maxWidth: '90%'
    }
  })

  useEffect(() => {
    dispatch(setPage('Editar informações'))
  })

  const user = useSelector(selectUser)
  const [name, setName] = useState(user.name)
  const [tel, setTel] = useState(user.phone)

  const validateAndUpdate = async () => {
    if (name === '' || tel === '') {
      if (toast.isActive('blankFields')) return
      toast({
        id: 'blankFields',
        description: 'É obrigatório informar o nome e o telefone.'
      })
      return false
    }
    if (!verifyName(name)) {
      if (toast.isActive('invalidName')) return
      toast({
        id: 'invalidName',
        description: 'O nome informado não é válido, insira o nome completo.'
      })
      return false
    }
    if (tel.length < 13) {
      if (toast.isActive('invalidPhone')) return
      toast({
        id: 'invalidPhone',
        description: 'O celular informado não é válido.'
      })
      return false
    }
    await dispatch(update({ user, name, tel }))
  }

  const pressKey = (e) => {
    if (e.key === 'Enter') {
      validateAndUpdate()
    }
  }

  useEffect(() => {
    if (user.status === 'failed' && !toast.isActive('updateProfileFailed')) {
      toast({
        id: 'updateProfileFailed',
        title: 'Falha ao atualizar os dados',
        description: user.error
      })
      dispatch(setStatus(''))
    } else if (user.status === 'success') {
      navigate('/profile')
      dispatch(setStatus(''))
    }
  }, [user])

  return (
    <Flex id="update" className="center">
      <Logo/>
      <Box w='100%' maxW='600px' mt={8} mb={16}>
          <Grid w="100%" maxW='600px'>
            <Input
              type="text"
              onKeyPress={pressKey}
              placeholder="Nome Completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="tel"
              onKeyPress={pressKey}
              placeholder="Celular"
              as={InputMask} mask="99 99999-9999"
              maskChar={null}
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <PrimaryButton mt={10} onClick={validateAndUpdate}>Atualizar dados</PrimaryButton>
          </Grid>
      </Box>
    </Flex>
  )
}
