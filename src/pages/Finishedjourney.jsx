import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  Text,
  Flex,
  Link,
  Icon,
  Center,
  Circle,
  Container
} from '@chakra-ui/react'
import { setPage } from '../store/pageSlice'
import Logo from '../components/Logo'
import { MdDone, MdFlightTakeoff } from 'react-icons/md'

export default function Endendjourney () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    dispatch(setPage())
  })

  return (
    <Flex flexDirection="column" alignItems="center" overflow="none">
      <Box pb={10}>
        <Logo h={12} w="auto" />
      </Box>
      <Container>
        <Box
          borderWidth={1}
          borderRadius={5}
          boxShadow="0 8px 8px -4px #9E9E9E"
          p={3}
          m={1}
        >
          <Box pb={3}>
            <Circle size="40px" background="#C8E6C9" margin="auto">
              <Icon fontSize="20" color="#43A047" as={MdDone} />
            </Circle>
          </Box>
          <Box pb={3}>
            <Center>
              <Text
                fontSize="18"
                fontWeight="medium"
                margin="auto"
                textAlign="center"
              >
                Parabéns
              </Text>
            </Center>
          </Box>
          <Box pb={3}>
            <Center>
              <Text fontSize="14" margin="auto" textAlign="center">
                Você terminou sua jornada com sucesso!
              </Text>
            </Center>
          </Box>
          <Box pb={3}>
            <Center>
              <Text fontSize="14" margin="auto" textAlign="center">
                Nós do Vou Imigrar agradecemos por utilizar nossos serviços e
                queremos lhe desejar boa sorte nessa sua nova etapa
              </Text>
            </Center>
          </Box>
          <Box pb={6}>
            <Center margin="auto">
              <Link
                fontSize="14"
                textAlign="center"
                color="rgb(102, 85, 213)"
                textDecoration="underline"
                onClick={() => {
                  navigate('/partner/2', { state: { journeyId: location.state.journeyId } })
                }}
              >
                Precisa de ajuda para o embarque?
              </Link>
            </Center>
          </Box>
          <Box pb={3}>
            <Center margin="auto">
              <Icon fontSize="40" color="black" as={MdFlightTakeoff} />
            </Center>
          </Box>
        </Box>
      </Container>
    </Flex>
  )
}
