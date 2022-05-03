import React from 'react'
import { Image } from '@chakra-ui/react'

export default function CountryImage (props) {
  return (
    <Image
      width='100vw'
      height='160px'
      objectFit='cover'
      src={props.src}
      alt='Imagem do país'
      borderRadius='10px'
      marginTop='15px'
    />
  )
}
