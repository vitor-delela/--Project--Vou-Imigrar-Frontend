import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'

import PrimaryButton from '../components/buttons/PrimaryButton'

import { setPage } from '../store/pageSlice'
import CountryCard from '../components/CountryCard'

export default function CountryMatches () {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPage('Match de Países'))
  })

  const contries = [
    {
      name: 'Estados Unidos',
      image: 'https://www.estudarfora.org.br/wp-content/uploads/2021/09/Estados-Unidos-768x538.jpg',
      percentage: 90
    },
    {
      name: 'Canada',
      image: 'https://www.estudarfora.org.br/wp-content/uploads/2021/09/Estados-Unidos-768x538.jpg',
      percentage: 75
    },{
      name: 'Austrália',
      image: 'https://www.estudarfora.org.br/wp-content/uploads/2021/09/Estados-Unidos-768x538.jpg',
      percentage: 50
    },{
      name: 'Portugal',
      image: 'https://www.estudarfora.org.br/wp-content/uploads/2021/09/Estados-Unidos-768x538.jpg',
      percentage: 25
    },
  ];
  
  return (
    <Box marginTop="20px">
      <div id="my-div">
        <a href='/home' class="fill-div">
          <CountryCard
            src= "https://www.estudarfora.org.br/wp-content/uploads/2021/09/Estados-Unidos-768x538.jpg"
            name= 'Estados Unidos'
            percentage={90}
          />
        </a>
      </div>
      
      <PrimaryButton marginTop={8} borderRadius={8} onClick={() => ""}>
        Ver todos os países 
      </PrimaryButton>
    </Box>
  )
}
