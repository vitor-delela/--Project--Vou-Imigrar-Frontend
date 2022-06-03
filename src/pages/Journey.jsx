import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Box, useToast, Spinner, Center } from '@chakra-ui/react'
import CountryImage from '../components/CountryImage'
import CountrySocialGroups from '../components/CountrySocialGroups'
import FinishJourneyButton from '../components/buttons/FinishJourneyButton'
import { useNavigate, useParams } from 'react-router-dom'
import { getJourneyDetails, getCountry, postFinishJourney } from '../store/journeySlice'
import ListComponent from '../components/ListComponent'

export default function Journey (props) {
  const navigate = useNavigate()
  const toast = useToast()
  const dispatch = useDispatch()

  const showToastWhenStatusFailed = async (toastO) => {
    toast(toastO)
    await new Promise(r => setTimeout(r, 3000))
    navigate(-1)
  }

  const { countryId } = useParams()
  const [journey, setJourney] = useState(null)
  const [country, setCountry] = useState(null)

  useEffect(async () => {
    if (props.route !== undefined && props.route.params.country !== undefined) {
      setCountry(props.route.params.country)
    }
    if (country && journey) {
      dispatch(setPage(country.name.toUpperCase()))
    } else {
      dispatch(setPage('Carregando'))
      const responseJourney = await getJourneyDetails({ countryId })
      if (!country) {
        const responseCountry = await getCountry({ countryId })
        if (responseCountry.status === 'failed' && !toast.isActive('countryNotFound')) {
          showToastWhenStatusFailed({
            id: 'countryNotFound',
            title: 'Falha ao encontrar país',
            position: 'bottom',
            status: 'error',
            description: responseCountry.message,
            isClosable: false,
            containerStyle: {
              width: '400px',
              maxWidth: '90%'
            }
          })
        }
        setCountry(responseCountry.data)
      }
      if (responseJourney.status === 'failed' && !toast.isActive('journeyNotFound')) {
        showToastWhenStatusFailed({
          id: 'journeyNotFound',
          title: 'Falha ao buscar jornada',
          position: 'bottom',
          status: 'error',
          description: responseJourney.message,
          isClosable: false,
          containerStyle: {
            width: '400px',
            maxWidth: '90%'
          }
        })
      }
      setJourney(responseJourney.data)
    }
  }, [country, journey])

  const finishJourney = () => {
    postFinishJourney({ countryId })
    navigate('/finished-journey')
  }

  return (country && journey)
    ? (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <Box
          onClick={() => {
            navigate(`/country/${country.id}`)
          }}
        >
          <CountryImage src={country.image} />
        </Box>
        <CountrySocialGroups groups={journey.groups} />
        <ListComponent title='Requisitos' journey={journey}/>
        <FinishJourneyButton onClick={finishJourney} />
      </Box>
      )
    : (
      <Center w='100%' maxW='600px' mt={8} mb={16}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='#6655D4'
          size='xl'
        />
      </Center>
      )
}
