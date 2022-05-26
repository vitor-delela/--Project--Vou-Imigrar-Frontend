import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Container, Box, useToast, Spinner, Center } from '@chakra-ui/react'
import DescriptionBoxWithoutTitle from '../components/DescriptionBoxWithoutTitle'
import { useNavigate, useParams} from 'react-router-dom'
import PartnerImage from '../components/PartnerImage'

export default function Partner (props) {
  const { id } = useParams()
  const toast = useToast()
  const navigate = useNavigate()

  const [country, setCountry] = useState(null)

  const dispatch = useDispatch()
  useEffect(async () => {
    dispatch(setPage('Parceiro'))
  })

  const standardDescription = "Nossos estabelecimentos parceiros estão disponíveis para ajudar os nossos imigrantes! Faça sua escolha e entre em contato.";

  return (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <Center> 
            <PartnerImage />
        </Center>
        <DescriptionBoxWithoutTitle text={"Escolas de Inglês"} fontWeight='bold'/>
        <DescriptionBoxWithoutTitle text={standardDescription} />
      </Box>
    )
    
}
