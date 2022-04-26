import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Flex, useToast } from '@chakra-ui/react'

import Input from '../components/Input'
import PrimaryButton from '../components/buttons/PrimaryButton'
import TextButton from '../components/buttons/TextButton'
import { verifyEmail } from '../utils/functions'

import { setPage } from '../store/pageSlice'
import { signIn, selectUser } from '../store/userSlice'

export default function CountryMacthes () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Match de Países'))
  })

  useEffect(() => {
      navigate('/home')
  })

  return (
    <Flex id="countryMatches" flexDirection='column' justifyContent='space-between' alignItems='center' mb={10}>
        {/* <Flex>
        </Flex> */}
      <Box px={4} w='100%'>
        <PrimaryButton borderRadius={8} onClick={() => navigate('/map-profile')}>
          Ver todos os países
        </PrimaryButton>
      </Box>
    </Flex>
  )
}
