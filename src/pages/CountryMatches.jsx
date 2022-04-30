import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Flex } from '@chakra-ui/react'

import PrimaryButton from '../components/buttons/PrimaryButton'

import { setPage } from '../store/pageSlice'
import CountryCard from '../components/CountryCard'

export default function CountryMatches () {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Match de Países'))
  })

  return (
    <Box marginTop="20px">
      <CountryCard
        src= "https://olhardigital.com.br/wp-content/uploads/2021/05/Canada.jpg"
        name= 'Canadá'
      />
    </Box>
  )
}
