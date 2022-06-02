import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { Box, useToast, Spinner, Center } from '@chakra-ui/react'
import PartnerDescriptionBox from '../components/PartnerDescriptionBox'
import { useNavigate, useParams} from 'react-router-dom'
import PartnerImage from '../components/PartnerImage'
import ListComponent from '../components/ListComponent'
import { getPartners } from '../store/partnerSlice'
import { HTTP } from '../config/axios.config'

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

  const sendEmail = async (jouneyId, partnerId) => {
    let response;
    response = await HTTP.post(
      '/users/meet-infos', {
        jouneyId: jouneyId,
        partnerId: partnerId
      }
    )
    const email = response.data
    const body = encodeURIComponent(email.body)
    window.location = `mailto:${email.to}?subject=${email.subject}&body=${body}`
  }

  if (partnerCategory) {
    partnerCategory.partners.map( (currentPartner) => {
      itemsSend.push({
        type: 'accordion',
          label: currentPartner.name,
          body: {
            text: currentPartner.description,
            button: {
              label: 'Agendar Reunião',
              to: () => sendEmail(props.journeyId, id)
            }
          }
      })
    })
  }

  return  partnerCategory ?
    (
      <Box w='100%' maxW='600px' mt={8} mb={8}>
        <Center> 
            <PartnerImage src={partnerCategory?.image}/>
        </Center>
        <Center>
          <PartnerDescriptionBox text={partnerCategory?.name} fontWeight='bold' background="rgba(109, 79, 211, 0.1)"/>
        </Center>
        <PartnerDescriptionBox text={partnerCategory.description} background="rgba(109, 79, 211, 0.05)" />
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




