import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Box, useToast, Spinner, Center } from '@chakra-ui/react'
import CountryImage from '../components/CountryImage'
import CountrySocialGroups from '../components/CountrySocialGroups'
import FinishJourneyButton from '../components/buttons/FinishJourneyButton'
import { useNavigate, useParams} from 'react-router-dom'

export default function Journey (props) {
  const { id } = useParams()
  const { country } = props.route.params

  const [journey, setJourney] = useState(null)

  const journey = {
    socialGroups:[
        {
            id: 1,
            name: "Facebook",
            link: "https://facebook.com/",
        },
        {
            id: 2,
            name: "WhatsApp",
            link: "https://web.whatsapp.com/",
        },
    ],
    requirements: []
  }

  const toast = useToast()

  const dispatch = useDispatch()
  useEffect(async () => {
    if (country) {
      dispatch(setPage(country.name.toUpperCase()))
    } else {
      dispatch(setPage('Carregando'))
      let response = await getJourneyDetails({ id })
      if (response.status == 'failed' && !toast.isActive('journeyNotFound')) {
        toast({
          id: 'journeyNotFound',
          title: 'Falha ao buscar jornada',
          position: 'bottom',
          status: 'error',
          description: response.message,
          isClosable: false,
          containerStyle: {
            width: '400px',
            maxWidth: '90%'
          }
        })
        await new Promise(r => setTimeout(r, 3000));
        navigate(-1)
      }
      setJourney(response.data)
    }
  })

  return journey
    ? (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <CountryImage src={journey.country.image} />
        <CountrySocialGroups groups={journey.socialGroups}/>
        <FinishJourneyButton />
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
