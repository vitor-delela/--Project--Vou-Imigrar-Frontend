import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Container, Box, useToast, Spinner, Center } from '@chakra-ui/react'
import PartnerDescriptionBox from '../components/PartnerDescriptionBox'
import { useNavigate, useParams} from 'react-router-dom'
import PartnerImage from '../components/PartnerImage'
import ListComponent from '../components/ListComponent'
import { getPartners } from '../store/partnerSlice'

export default function Partner (props) {
  const toast = useToast()
  const navigate = useNavigate()

  const [partners, setPartners] = useState(null)

  const dispatch = useDispatch()
  useEffect(async () => {
    if(partners){
      dispatch(setPage("Parceiro"))
    } else{
      dispatch(setPage('carregando Parceiro'))
      const response = await getPartners()

      if (response.status == 'failed' && !toast.isActive('partnersNotFound')) {
        toast({
          id: 'partnersNotFound',
          title: 'Falha ao buscar parceiros',
          position: 'bottom',
          status: 'error',
          description: response.message,
          isClosable: false,
          containerStyle: {
            width: '400px',
            maxWidth: '90%'
          }
        })
        await new Promise(r => setTimeout(r, 3000));
        navigate(-1)
      }
      setPartners(response.data)
    }
  })

  console.log(partners)

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
        }
        //,
        // {
        //   type: 'accordion',
        //   label: 'Wizard',
        //   body: {
        //     text: 'Descrição do parceiro',
        //     button: {
        //       label: 'Agendar Reunião',
        //       to: 'https://facebook.com'
        //     }
        //   }
        // },
        // {
        //   type: 'accordion',
        //   label: 'CNA',
        //   body: {
        //     text: 'Descrição do parceiro',
        //     button: {
        //       label: 'Agendar Reunião',
        //       to: 'https://facebook.com'
        //     }
        //   }
        // }
      ]

  return (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <Center> 
            <PartnerImage src={partners === null ? null : partners.image}/>
        </Center>
        <Center>
            <PartnerDescriptionBox text={partners === null ? null : partners.name} fontWeight='bold'/>
        </Center>
        <PartnerDescriptionBox />
        <ListComponent items={itemsSend} />
      </Box>
    )
    
}




