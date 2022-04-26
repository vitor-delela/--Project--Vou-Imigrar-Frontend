import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'

import { Box, Text, Flex, VStack, Avatar, Divider } from '@chakra-ui/react'
import { MdEmail, MdLogout, MdMap, MdMode } from 'react-icons/md'

export default function Profile () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Voltar'))
  })

  return (
    <Box>
      <Box textAlign='center' position='relative'>
        <Divider borderColor='purple' w='80vw' mt={24}/>
        <Avatar name='Kola Tioluwani' bg='purple' color='white' size='xl' mt='-3rem'/>
        <Text color='purple' fontSize={20} mt={4}>Kola Tioluwani</Text>
      </Box>
      
      <VStack mt={14} color='purple' fontSize={20} alignItems='start' spacing={5}>
        <Flex alignItems='center'>
          <MdMode fontSize={28}/>
          <Text ml={5}> Editar informações</Text>
        </Flex>

        <Flex alignItems='center'>
          <MdMap fontSize={28}/>
          <Text ml={5}>Fazer novo mapeamento</Text>
        </Flex>

        <Flex alignItems='center'>
          <MdEmail fontSize={28}/>
          <Text ml={5}>Fale conosco</Text>
        </Flex>

        <Flex alignItems='center'>
          <MdLogout fontSize={28}/>
          <Text ml={5}>Sair</Text>
        </Flex>
      </VStack>
    </Box>
  )
}
