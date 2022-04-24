import React from 'react'
import { Center, Container, Heading } from '@chakra-ui/react'
import DescriptionBox from '../components/DescriptionBox'
import CountryImage from '../components/CountryImage'
import StartJourneyButton from '../components/buttons/StartJouneyButton'

export default function CountryDetails (props) {

  // const country = props.country;
  const country = {
    name: 'Canada',
    image: 'https://olhardigital.com.br/wp-content/uploads/2021/05/Canada.jpg',
    description: 'Breve descrição do país'
  }

  return (
    <div>
      <Center>
        <Heading
          fontSize='20'
          position='absolute'
          top='5px'
        >
          {country.name.toUpperCase()}
        </Heading>
      </Center>
      <CountryImage src={country.image} />
      <Container marginTop='20px'>
        <DescriptionBox text={country.description} />
        <StartJourneyButton />
      </Container>
    </div>
  )
}
