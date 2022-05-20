import React from 'react'
import { Icon } from '@chakra-ui/react'
import PrimaryButton from './PrimaryButton'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'

export default function StartJourneyButton (props) {
  const startJourney = () => {
    return alert('Iniciar jornada')
  }

  return (
    <PrimaryButton
      height='50px'
      borderRadius='10px'
      fontSize='18'
      fontWeight='bold'
      marginTop='20px'
      rightIcon={<Icon marginLeft='5px' fontSize='20' as={MdOutlineAirplanemodeActive}/>}
      onClick={startJourney}
      {...props}
    >
    <PrimaryButton onClick={() => { navigate('/countrydetails') }}></PrimaryButton>
      Iniciar jornada
    </PrimaryButton>
  )
}
