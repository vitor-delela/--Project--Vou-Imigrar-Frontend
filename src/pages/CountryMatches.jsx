import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'

import PrimaryButton from '../components/buttons/PrimaryButton'

import { setPage } from '../store/pageSlice'
import CountryCard from '../components/CountryCard'
import { useNavigate } from 'react-router-dom'
import { findAllMatches } from '../store/countrySlice'

export default function CountryMatches () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShowingAllCountries, setIsShowingAllCountries] = useState(false)
  const [matches, setMatches] = useState([])

  useEffect(async() => {
    dispatch(setPage('Match de Países'))
  })

  useEffect(async () => {
    const response = await dispatch(findAllMatches())
    if (response.payload.status === 'success') {
      console.log(response.payload.data)
      setMatches(response.payload.data)
    }
  }, [])

  return (
    <div>
      <Box marginTop="20px" paddingBottom="82px">
        {
          isShowingAllCountries
            ? matches.map((match) => {
              return <CountryCard
                key={match.id}
                src={match.country.image}
                name={match.country.name}
                percentage={match.matchPercentage}
                onClick={() => navigate(`/country/${match.country.id}`)}
              />
            })
            : matches.slice(0, 3).map((match) => {
              return <CountryCard
                key={match.id}
                src={match.country.image}
                name={match.country.name}
                percentage={match.matchPercentage}
                onClick={() => navigate(`/country/${match.country.id}`)}
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
    </div>

  )
}
