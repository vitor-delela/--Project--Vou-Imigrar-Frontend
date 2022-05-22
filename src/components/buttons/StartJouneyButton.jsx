import React from 'react'
import { Icon } from '@chakra-ui/react'
import PrimaryButton from './PrimaryButton'
import { MdOutlineAirplanemodeActive } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { startJourney } from '../../store/journeySlice'

export default function StartJourneyButton (props) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const beginJourney = async () => {
    console.log(props)
    dispatch(startJourney(props)).then(() => {
      navigate(`/journey/${props.countryId}`)
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
