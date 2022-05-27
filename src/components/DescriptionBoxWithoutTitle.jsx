import React from 'react'
import { Box, Text, Center, Flex } from '@chakra-ui/react'

export default function DescriptionBoxWithoutTitle (props) {

  return (
    <Flex>
      <Box background='rgba(109, 79, 211, 0.05)' borderRadius='10px' style={{marginTop: '20px'}}> 
        <Center>
          {props.text == null ? 
            <Text padding='4'> 
              Nossos estabelecimentos parceiros estão disponíveis para ajudar os nossos imigrantes! <br/> Faça sua escolha e entre em contato.
            </Text> 
            : 
            <Text padding='4' fontWeight={props.fontWeight}>
              {props.text}
            </Text>
          }
        </Center>
      </Box>
    </Flex>
  )
}
