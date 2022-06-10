import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Container, Box, useToast, Spinner, Center, Text } from '@chakra-ui/react'
import DescriptionBox from '../components/DescriptionBox'
import CountryImage from '../components/CountryImage'
import PhotosCarousel from '../components/PhotosCarousel'
import CountryInformation from '../components/CountryInformation'
import StartJourneyButton from '../components/buttons/StartJourneyButton'
import { getCountryDetails } from '../store/countrySlice'
import { useNavigate, useParams } from 'react-router-dom'
import PrimaryButton from '../components/buttons/PrimaryButton'

export default function CountryDetails(props) {
  const { id } = useParams()
  const toast = useToast()
  const navigate = useNavigate()

  const [country, setCountry] = useState(null)

  const dispatch = useDispatch()
  useEffect(async () => {
    if (country) {
      dispatch(setPage(country.name.toUpperCase()))
    } else {
      dispatch(setPage('Carregando'))
      const response = await getCountryDetails({ id })
      if (response.status === 'failed' && !toast.isActive('countryNotFound')) {
        toast({
          id: 'countryNotFound',
          title: 'Falha ao buscar país',
          position: 'bottom',
          status: 'error',
          description: response.message,
          isClosable: false,
          containerStyle: {
            width: '400px',
            maxWidth: '90%'
          }
        })
        await new Promise(r => setTimeout(r, 3000))
        navigate(-1)
      }
      setCountry(response.data)
    }
  })

  return country
    ? (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <CountryImage src={country.image} />
        <Container marginTop='20px'>
          <DescriptionBox text={country.description} />
          {country.hasStartedJourney === 'N'
            ? <StartJourneyButton country={country.id} />
            : (
              <Text fontSize="14" fontWeight="extrabold" mt="2" textAlign="center">
                Você já possui jornada para o país!
                <Box mt="2">
                  <PrimaryButton w='90%' onClick={() => navigate('/journey/${country.id}')}>
                    Ir para a jornada iniciada 
                  </PrimaryButton>
                </Box>
              </Text>
            )
          }
        </Container>
        <PhotosCarousel photos={country.photos} />
        <CountryInformation information={country.infos} />
        {
          country.hasStartedJourney === 'N'
            ? <StartJourneyButton country={country.id} />
            : null
        }
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
