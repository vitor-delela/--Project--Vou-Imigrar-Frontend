import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'

import PrimaryButton from '../components/buttons/PrimaryButton'

import CountryCard from '../components/CountryCard'
import { useNavigate } from 'react-router-dom'
import { findAllMatches } from '../store/countrySlice'

export default function CountryMatches () {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShowingAllCountries, setIsShowingAllCountries] = useState(false)
  const [matches, setMatches] = useState([])

  const hasMatches = matches.length > 0
  const buttonLabel = hasMatches ? 'Ver todos os países' : 'Iniciar mapeamento'
  const clickButton = () => hasMatches ? setIsShowingAllCountries(true) : navigate('/map')

  useEffect(async () => {
    const response = await dispatch(findAllMatches())
    if (response.payload.status === 'success') {
      setMatches(response.payload.data)
    }
  }, [])

  return (
    <Box marginTop="20px" paddingBottom="20px">
      {
        isShowingAllCountries
          ? matches.map((match) => {
            return <CountryCard
              key={match.id}
              src={match.country.image}
              name={match.country.name}
              percentage={match.matchPercentage}
              onClick={() => navigate(`/country/${match.country.id}`)}
              opacity={match.hasFinalizedJourney === 'Y' ? 0.5 : 1}
            />
          })
          : matches.slice(0, 3).map((match) => {
            return <CountryCard
              key={match.id}
              src={match.country.image}
              name={match.country.name}
              percentage={match.matchPercentage}
              onClick={() => navigate(`/country/${match.country.id}`)}
              opacity={match.hasFinalizedJourney === 'Y' ? 0.5 : 1}
            />
          })
      }

      <PrimaryButton
        fontSize={18}
        fontWeight='bold'
        marginTop={8}
        borderRadius={8}
        onClick={clickButton}
        display={hasMatches && isShowingAllCountries ? 'none' : 'block'}
      >
        {buttonLabel}
      </PrimaryButton>
    </Box>
  )
}
