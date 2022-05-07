import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'

import PrimaryButton from '../components/buttons/PrimaryButton'

import { setPage } from '../store/pageSlice'
import CountryCard from '../components/CountryCard'
import { useNavigate } from 'react-router-dom'

export default function CountryMatches () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShowingAllCountries, setIsShowingAllCountries] = useState(false)

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
    <Box marginTop="20px" paddingBottom="82px">
      {
        isShowingAllCountries 
        ? contries.map((country) => {
          return <CountryCard
            src={country.image}
            name={country.name}
            percentage={country.percentage}
            onClick={() => navigate('/country')}
          />
        })
        : contries.slice(0, 3).map((country) => {
          return <CountryCard
            src={country.image}
            name={country.name}
            percentage={country.percentage}
            onClick={() => navigate('/country')}
          />
        })
      }        
      
      <PrimaryButton
        fontSize={18}
        fontWeight='bold'
        marginTop={8}
        borderRadius={8}
        onClick={() => setIsShowingAllCountries(true)}
        display={isShowingAllCountries ? 'none' : 'block'}
      >
        Ver todos os países 
      </PrimaryButton>
    </Box>
  )
}
