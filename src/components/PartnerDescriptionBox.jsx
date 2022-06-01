import React from 'react'
import { Box, Text, Center, Flex } from '@chakra-ui/react'

export default function PartnerDescriptionBox (props) {

  return (
    <Flex justifyContent="center" background={props.background} borderRadius='10px' style={{marginTop: '20px'}}>
      {props.text == null ? 
        <Text padding='4'> 
          Nossos estabelecimentos parceiros estão disponíveis para ajudar os nossos imigrantes! <br/> Faça sua escolha e entre em contato.
        </Text> 
        : 
        <Text padding='4' fontWeight={props.fontWeight}>
          {props.text}
        </Text>
      }
    </Flex>
  )
}
