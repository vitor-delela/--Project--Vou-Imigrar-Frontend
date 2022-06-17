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
  const icons = [
    <MdCloudQueue fontWeight='bold' fontSize='80' />,
    <MdMessage fontSize='80' />,
    <MdPeopleOutline fontSize='80' />,
    <MdMap fontSize='80' />,
    <MdWatchLater fontSize='80' />,
    <MdPaid fontSize='80' />,
    <MdPhone fontSize='80' />,
    <MdFlashOn fontSize='80' />
  ]

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

        {
          information.map((info, index) => {
            return <HStack key={index} spacing='24px' marginBottom='15px'>
              <Stack spacing='-10px' align='center' color='#6D4FD3' maxWidth='100px'>
                {icons[index]}
                <Text align='center' fontWeight='bold'>{info.name}</Text>
              </Stack>
              <Text>{info.description}</Text>
            </HStack>
          })
        }

        </Container>
    </div>
  )
}
