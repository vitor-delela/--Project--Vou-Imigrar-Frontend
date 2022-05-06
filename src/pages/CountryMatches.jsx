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
      <div id="my-div">
        <a href='/home' class="fill-div">
          <CountryCard
          src= "https://www.estudarfora.org.br/wp-content/uploads/2021/09/Estados-Unidos-768x538.jpg"
          name= 'Estados Unidos'
          percentage= '90%'
          />
        </a>
      </div>
      
      <Box w='100%' p={6}>
        <PrimaryButton borderRadius={8} onClick={() => ""}>
          Ver todos os países 
        </PrimaryButton>
      </Box>
    </Box>
  )
}
