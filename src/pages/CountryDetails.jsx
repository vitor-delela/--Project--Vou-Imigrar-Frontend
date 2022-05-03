import React from 'react'
import { Center, Container, Heading } from '@chakra-ui/react'
import DescriptionBox from '../components/DescriptionBox'
import CountryImage from '../components/CountryImage'
import PhotosCarousel from '../components/PhotosCarousel'
import CountryInformation from '../components/CountryInformation'
import StartJourneyButton from '../components/buttons/StartJouneyButton'

export default function CountryDetails (props) {
  // const country = props.country;
  const country = {
    name: 'Canada',
    image: 'https://olhardigital.com.br/wp-content/uploads/2021/05/Canada.jpg',
    description: 'Breve descrição do país',
    photos: [
      'https://www.ie.com.br/wp-content/uploads/2021/12/cidades-mais-quentes-canada.jpeg',
      'https://www.ie.com.br/wp-content/uploads/2022/01/onde-fica-canada.jpeg',
      'https://www.tirarvistocanadense.com.br/wp-content/uploads/2020/01/Canad%C3%A1-min.jpeg'
    ],
    information: {
      clima: 'Entre julho e setembro, os meses mais quentes, a temperatura média é de 25°C. No inverno, fica entre 10°C e 19°C',
      idioma: 'Inglês',
      populacao: 'Cerca de 36 milhões de habitantes',
      territorio: '9.985.000 km²',
      timezone: '(UTC -7 a UTC -2:30) 4 horas a menos à meia hora à frente do horário do Brasil',
      moeda: 'Dólar Canadense',
      ddi: '+1',
      voltagem: '110 V'
    }
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
      <PhotosCarousel photos={country.photos}/>
      <CountryInformation information={country.information}/>
      <StartJourneyButton />
      <Container paddingBottom='80px'/>
    </div>
  )
}
