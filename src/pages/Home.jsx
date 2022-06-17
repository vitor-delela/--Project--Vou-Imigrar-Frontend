import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Logo from '../components/Logo'
import PrimaryButton from '../components/buttons/PrimaryButton'
import { Heading, Box, Text, Flex, Image, Icon, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { BiWorld } from 'react-icons/bi'
import { getUserStatusAndJourneys } from '../store/journeySlice'
import JourneysList from '../components/JourneysList'

const HomeImageContent = [
  {
    id: 'UNMAPPED_PROFILE',
    image: '../src/assets/girl-with-map.png',
    label: 'Complete o mapeamento do seu perfil para poder ter acesso às funcoionalidades da aplicação'
  },
  {
    id: 'MAPPED_PROFILE',
    image: '../src/assets/person-path.png',
    label: 'Inicie uma jornada para ver quais países deram match com seu perfil'
  }
]

export default function Home () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [journeys, setJourneys] = useState([])
  const [status, setStatus] = useState('')

  useEffect(async () => {
    const response = await dispatch(getUserStatusAndJourneys())
    if (response.payload.status === 'success') {
      setStatus(response.payload.data.status)
      setJourneys(response.payload.data.journeys)
    }
  }, [])

  const content = HomeImageContent.find(obj => obj.id === status)

  return (
    <Flex id="home" maxW='600px' m={'auto'} flexDirection='column' alignItems='center' h='100%'>
      <Heading alignSelf='center' mb={12}>
        <Logo h={12} w='auto'/>
      </Heading>

      <Flex
        w='100%'
        overflow='auto'
        whiteSpace='nowrap'
        alignSelf='center'
        minHeight={16}
      >
        {[0, 1, 2].map((tip) => {
          return (
            <Flex
              key={tip}
              py={8}
              px={6}
              mx={4}
              bg='background'
              borderRadius={8}
              alignItems='center'
              justifyContent='center'
            >
              <Text>DICA Lorem ipsum Lorem ipsum</Text>
            </Flex>
          )
        })}
      </Flex>

      {['UNMAPPED_PROFILE', 'MAPPED_PROFILE'].includes(status) &&
        <Box w={['100%', null, '50%']} px={8} my={16}>
          <Image
            width='100%'
            height='auto'
            objectFit='cover'
            src={content.image}
            alt='Garota com mapa'
            id='girl-with-map'
            mb={14}
          />

          <Text textAlign='center' fontSize={18}>
            {content.label}

            {status === 'MAPPED_PROFILE' &&
              <Icon as={BiWorld} display='inline' mb='-5px' ml={1} w={6} h={6}/>
            }
          </Text>
        </Box>
      }

      {status === 'STARTED_JOURNEY' &&
        <Box my={12} w='100%'>
          <Text ml={2} mb={2} fontSize={24} fontWeight='bold' color='purple'>Jornadas</Text>
          { !journeys
            ? <Alert status='error'>
                <AlertIcon/>
                <AlertTitle>Erro ao buscar jornadas.</AlertTitle>
              </Alert>
            : <JourneysList journeys={journeys}/>
          }
        </Box>
      }

      {status === 'UNMAPPED_PROFILE' &&
        <Box px={4} w='100%'>
          <PrimaryButton borderRadius={8} fontSize={18} fontWeight='bold' onClick={() => navigate('/map')}>
            Iniciar mapeamento
          </PrimaryButton>
        </Box>
      }
    </Flex>
  )
}
