import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { selectUser, logout } from '../store/userSlice'

import { Box, Text, Flex, VStack, Avatar, Divider } from '@chakra-ui/react'
import { MdEmail, MdLogout, MdMap, MdMode } from 'react-icons/md'

export default function Profile () {
  const user = useSelector(selectUser)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Voltar'))
  })

  const sendMail = () => {
    window.location = 'mailto:faleconosco@vouimigrar.com'
  }
  const navUpdate = () => {
    navigate('/update')
  }
  const navMapProfile = () => {
    navigate('/map')
  }
  const logoutClick = () => {
    dispatch(logout(user))
  }

  return (
    <Box px={4}>
      <Box textAlign='center' position='relative'>
        <Divider borderColor='purple' mt={24}/>
        <Avatar name={user.name} bg='purple' color='white' size='xl' mt='-3rem'/>
        <Text color='purple' fontSize={20} mt={4}>{user.name}</Text>
      </Box>

      <VStack mt={14} color='purple' fontSize={20} alignItems='start' spacing={5}>
        <Flex alignItems='center'>
          <MdMode fontSize={28}/>
          <Text ml={5} onClick={navUpdate}>Editar informações</Text>
        </Flex>

        <Flex alignItems='center'>
          <MdMap fontSize={28}/>
          <Text ml={5} onClick={navMapProfile}>Fazer novo mapeamento</Text>
        </Flex>

        <Flex alignItems='center'>
          <MdEmail fontSize={28}/>
          <Text ml={5} onClick={sendMail}>Fale conosco</Text>
        </Flex>

        <Flex alignItems='center'>
          <MdLogout fontSize={28}/>
          <Text ml={5} onClick={logoutClick}>Sair</Text>
        </Flex>
      </VStack>
    </Box>
  )
}
