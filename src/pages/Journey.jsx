import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Box, useToast, Spinner, Center } from '@chakra-ui/react'
import CountryImage from '../components/CountryImage'
import CountrySocialGroups from '../components/CountrySocialGroups'
import FinishJourneyButton from '../components/buttons/FinishJourneyButton'
import { useNavigate, useParams} from 'react-router-dom'

export default function Journey (props) {
//   const { id } = useParams()
  const journey = {
    country: {
        id: 1,
        name: "Canada",
        description: "Lorem i",
        image: "https://vouimigrar.s3.us-east-2.amazonaws.com/countries/1/logo/canada.png",
    },
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
  const navigate = useNavigate()

  const dispatch = useDispatch()
  useEffect(async () => {
        dispatch(setPage(journey.country.name.toUpperCase()))
    }
  )
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
