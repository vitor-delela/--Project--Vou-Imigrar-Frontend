import React from 'react'
import { Container, Heading, HStack, Image } from '@chakra-ui/react'

export default function PhotosCarousel (props) {
  if (props.photos === undefined) {
    return (<div></div>)
  }
  return (
    <div>
        <Heading
            fontWeight='normal'
            fontSize='28px'
            marginTop='10px'
        >
            Fotos
        </Heading>
        <Container marginTop='10px'>
            <HStack maxW='90vw' spacing={4} overflow='auto' whiteSpace='nowrap' alignSelf='center'>
                {
                  props.photos.map((p, index) => {
                    return (
                      <Image
                          key={index}
                          src={p.url}
                          alt='Foto do país'
                          width='100%'
                          height='180px'
                      />
                    )
                  })
                }
            </HStack>
        </Container>
    </div>
  )
}
