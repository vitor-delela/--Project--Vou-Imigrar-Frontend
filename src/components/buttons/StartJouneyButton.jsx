import React from 'react'
import { Icon } from '@chakra-ui/react'
import PrimaryButton from './PrimaryButton'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { startJourney } from '../../store/journeySlice'


  export default function StartJourneyButton (props) {
    const navigate = useNavigate()

    const beginJourney = async () => {
      dispatch(startJourney(props.countryId))
      navigate(`/country/${props.countryId}`) 
    }
  return (
    <PrimaryButton
      height='50px'
      borderRadius='10px'
      fontSize='18'
      fontWeight='bold'
      marginTop='20px'
      rightIcon={<Icon marginLeft='5px' fontSize='20' as={MdOutlineAirplanemodeActive}/>}
      onClick={beginJourney}

      {...props}
    >
      Iniciar jornada
    </PrimaryButton>
  

  )
}
