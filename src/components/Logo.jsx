import React from 'react'
import { Image } from '@chakra-ui/react'

export default function Logo () {
  return (
    <Image
      width='200px'
      height='85px'
      objectFit='cover'
      src='../src/assets/vou-imigrar-logo.png'
      alt='Logo Vou Imigrar'
      id='logo'
    />
  )
}
