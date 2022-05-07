import React from 'react'
import { Container, Heading, Stack, HStack, Text } from '@chakra-ui/react'
import {
  MdCloudQueue,
  MdMessage,
  MdPeopleOutline,
  MdMap,
  MdWatchLater,
  MdPaid,
  MdPhone,
  MdFlashOn
} from 'react-icons/md'

export default function PhotosCarousel (props) {
  const information = props.information

  return (
    <div>
        <Heading
            fontWeight='normal'
            fontSize='28px'
            marginTop='20px'
        >
            Informações
        </Heading>
        <Container marginTop='10px' maxWidth='85vw'>

        <HStack spacing='24px' marginBottom='15px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdCloudQueue fontWeight='bold' fontSize='80' />
            <Text>Clima</Text>
          </Stack>
          <Text>{information.clima}</Text>
        </HStack>

        <HStack spacing='24px' marginBottom='15px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdMessage fontSize='80' />
            <Text fontWeight='bold'>Idioma</Text>
          </Stack>
          <Text>{information.idioma}</Text>
        </HStack>

        <HStack spacing='24px' marginBottom='15px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdPeopleOutline fontSize='80' />
            <Text fontWeight='bold'>População</Text>
          </Stack>
          <Text>{information.populacao}</Text>
        </HStack>

        <HStack spacing='24px' marginBottom='15px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdMap fontSize='80' />
            <Text fontWeight='bold'>Território</Text>
          </Stack>
          <Text>{information.territorio}</Text>
        </HStack>

        <HStack spacing='24px' marginBottom='15px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdWatchLater fontSize='80' />
            <Text fontWeight='bold'>Fuso</Text>
            <Text fontWeight='bold'>Horário</Text>
          </Stack>
          <Text>{information.timezone}</Text>
        </HStack>

        <HStack spacing='24px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdPaid fontSize='80' />
            <Text fontWeight='bold'>Moeda</Text>
          </Stack>
          <Text>{information.moeda}</Text>
        </HStack>

        <HStack spacing='24px' marginBottom='15px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdPhone fontSize='80' />
            <Text fontWeight='bold'>Código</Text>
            <Text fontWeight='bold'>Telefonico</Text>
          </Stack>
          <Text>{information.ddi}</Text>
        </HStack>

        <HStack spacing='24px' marginBottom='15px'>
          <Stack spacing='-10px' align='center' color='#6D4FD3'>
            <MdFlashOn fontSize='80' />
            <Text fontWeight='bold'>Voltagem</Text>
          </Stack>
          <Text>{information.voltagem}</Text>
        </HStack>

        </Container>
    </div>
  )
}
