import React from 'react'
import { Icon, useToast } from '@chakra-ui/react'
import PrimaryButton from './PrimaryButton'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startJourney } from '../../store/journeySlice'

export default function StartJourneyButton (props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toast = useToast()

  const beginJourney = async () => {
    dispatch(startJourney(props)).then((response) => {
      if (response.payload.status === 'failed' && !toast.isActive('countryNotFound')) {
        toast({
          id: 'startJourneyFail',
          title: 'Falha ao iniciar a jornada',
          position: 'bottom',
          status: 'error',
          description: response.message,
          isClosable: false,
          containerStyle: {
            width: '400px',
            maxWidth: '90%'
          }
        })
      } else {
        navigate(`/journey/${props.country}`)
      }
    })
  }
  return (
    <PrimaryButton
      height='50px'
      borderRadius='10px'
      fontSize='18'
      fontWeight='bold'
      marginTop='20px'
      rightIcon={<Icon marginLeft='5px' fontSize='20' as={MdOutlineAirplanemodeActive} />}
      onClick={beginJourney}

      {...props}
    >
      Iniciar jornada
    </PrimaryButton>

  )
}
