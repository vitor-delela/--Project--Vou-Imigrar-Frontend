import React, { useEffect, useState } from 'react'
import { getDadosAdmin } from '../store/dashboardSlice'
import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'
// import { useDispatch } from 'react-redux'

import Logo from '../components/Logo'
import {
  Heading,
  Box,
  Text,
  Flex,
  useToast,
  Spinner,
  Center
} from '@chakra-ui/react'

export default function Home () {
  const toast = useToast()

  const [adminInfo, setAdminInfo] = useState(null)

  useEffect(async () => {
    const response = await getDadosAdmin()
    if (response.status === 'failed' && !toast.isActive('dataNotFound')) {
      toast({
        id: 'dataNotFound',
        title: 'Falha ao buscar dados',
        position: 'bottom',
        status: 'error',
        description: response.message,
        isClosable: false,
        containerStyle: {
          width: '400px',
          maxWidth: '90%'
        }
      })
    }
    console.log(response.data)
    setAdminInfo(response.data)
  }, [])

  return (adminInfo)
    ? (
      <Flex
        id="dashboard"
        w="100%"
        h="100%"
        p={10}
        bg="#E5E5E5"
        flexDirection="column"
      >
        <Heading alignSelf={'left'} mb={12}>
          <Logo h={12} w="auto" />
        </Heading>
        <Flex gap={10}>
          <Box flex="1" p={4} bg="white" borderRadius={8}>
            <Text fontSize='20px'>Quantidade de usuários na plataforma</Text>
            <Flex spacing={5} align="center" justify="center" height="15rem">
              <Text fontSize='4rem' color='#694bdb'>{adminInfo.totalUsers}</Text>
            </Flex>
          </Box>
          <Box flex="1" p={4} bg="white" borderRadius={8} align="center">
            <Text>Quantidade de Jornadas iniciadas por país</Text>
            <BarChart
              width={600}
              height={300}
              data={adminInfo.journeysInProgress}
              margin={{
                top: 5,
                right: 15,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="countryName" />
              <Tooltip />
              <Bar dataKey="journeys" fill="#694bdb" name="Jornadas" />
            </BarChart>
          </Box>
          <Box flex="1" p={4} bg="white" borderRadius={8} align="center">
            <Text>Quantidade de Jornadas finalizadas por país</Text>
            <BarChart
              width={600}
              height={300}
              data={adminInfo.finishedJourneys}
              margin={{
                top: 5,
                right: 15,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="countryName" />
              <Tooltip />
              <Bar dataKey="journeys" fill="#694bdb" name="Jornadas" />
            </BarChart>
          </Box>
        </Flex>
        <Box flex="1" p={4} bg="white" borderRadius={8} marginTop={15} align="center">
          <Text>Quantidade total de jornadas por país</Text>
          <BarChart
            width={1400}
            height={300}
            data={adminInfo.startedJourneys}
            margin={{
              top: 5,
              right: 15,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="countryName" />
            <Tooltip />
            <Bar dataKey="journeys" fill="#694bdb" name="Jornadas" />
          </BarChart>
        </Box>
      </Flex >
      )
    : (
      <Center w='100%' maxW='600px' mt={8} mb={16}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='#694bdb'
          size='xl'
        />
      </Center>
      )
}
