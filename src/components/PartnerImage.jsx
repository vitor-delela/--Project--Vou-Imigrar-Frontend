import React from 'react'
import { Image } from '@chakra-ui/react'

export default function PartnerImage (props) {
  return (
    <Image
      width='90px'
      height='100px'
      objectFit='cover'
      src={'https://vouimigrar.s3.us-east-2.amazonaws.com/countries/3/logo/australia.png'}
      alt='Imagem da categoria do parceiro'
      borderRadius='15px'
    />
  )
}
