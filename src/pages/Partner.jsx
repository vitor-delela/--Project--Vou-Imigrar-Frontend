import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Container, Box, useToast, Spinner, Center } from '@chakra-ui/react'
import DescriptionBoxWithoutTitle from '../components/DescriptionBoxWithoutTitle'
import { useNavigate, useParams} from 'react-router-dom'
import PartnerImage from '../components/PartnerImage'
import ListComponent from '../components/ListComponent'

export default function Partner (props) {
  const { id } = useParams()
  const toast = useToast()
  const navigate = useNavigate()

  const [country, setCountry] = useState(null)

  const dispatch = useDispatch()
  useEffect(async () => {
    dispatch(setPage('Parceiro'))
  })

  const itemsSend = [{
          type: 'accordion',
          label: 'FISK',
          body: {
            text: 'Descrição do parceiro',
            button: {
              label: 'Agendar Reunião',
              to: 'https://facebook.com'
            }
          }
        },
        {
          type: 'accordion',
          label: 'Wizard',
          body: {
            text: 'Descrição do parceiro',
            button: {
              label: 'Agendar Reunião',
              to: 'https://facebook.com'
            }
          }
        },
        {
          type: 'accordion',
          label: 'CNA',
          body: {
            text: 'Descrição do parceiro',
            button: {
              label: 'Agendar Reunião',
              to: 'https://facebook.com'
            }
          }
        }
      ]

  return (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <Center> 
            <PartnerImage />
        </Center>
        <Center>
            <DescriptionBoxWithoutTitle text={"Escolas de Inglês"} fontWeight='bold'/>
        </Center>
        <DescriptionBoxWithoutTitle />
        <ListComponent items={itemsSend} />
      </Box>
    )
    
}




