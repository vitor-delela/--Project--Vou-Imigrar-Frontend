import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Flex } from '@chakra-ui/react'

import { findAllQuestions } from '../store/mappingSlice'

export default function MappingProfile () {

  const [questions, setQuestions] = useState([])
  
  const dispatch = useDispatch()

  useEffect(async () => {
    const response = await dispatch(findAllQuestions())
    if (response.payload.status === 'success') {
      console.log(response.payload.data)
      setQuestions(response.payload.data)
    }
  }, [])

  return (
    <Flex id="map" className="center">
      
    </Flex>
  )
}
