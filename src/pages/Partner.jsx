import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Box, useToast, Spinner, Center } from '@chakra-ui/react'
import PartnerDescriptionBox from '../components/PartnerDescriptionBox'
import { useNavigate, useParams} from 'react-router-dom'
import PartnerImage from '../components/PartnerImage'
import ListComponent from '../components/ListComponent'
import { getPartners } from '../store/partnerSlice'

export default function Partner (props) {
  const { id } = useParams()
  const toast = useToast()
  const navigate = useNavigate()

  const [partnerCategory, setPartnerCategory] = useState(null)

  const dispatch = useDispatch()
  useEffect(async () => {
    if(partnerCategory){
      dispatch(setPage("Parceiro"))
    } else{
      dispatch(setPage('carregando Parceiro'))
      const response = await getPartners({ id })

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
      setPartnerCategory(response.data)
    }
  })

  const itemsSend = []

  {if (partnerCategory)
    partnerCategory.partners.map( (currentPartner) => {
      itemsSend.push({
        type: 'accordion',
          label: currentPartner.name,
          body: {
            text: currentPartner.description,
            button: {
              label: 'Agendar Reunião',
              to: ''
            }
          }
      })
    })
  }

  return  partnerCategory ?
    (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <Center> 
            <PartnerImage src={partnerCategory === null ? null : partnerCategory.image}/>
        </Center>
        <Center>
            <PartnerDescriptionBox text={partnerCategory === null ? null : partnerCategory.name} fontWeight='bold'/>
        </Center>
        <PartnerDescriptionBox />
        <ListComponent items={itemsSend} />
      </Box>
    )
    : 
    (
      <Center w='100%' maxW='600px' mt={8} mb={16}>
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='#6655D4'
          size='xl'
        />
      </Center>
    )
}




