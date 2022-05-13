import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { calculateMatch, findAllQuestions } from '../store/mappingSlice'

import { Flex, RadioGroup, Stack, Radio, useToast } from '@chakra-ui/react'
import TextArea from '../components/TextArea'
import RoundButton from '../components/buttons/RoundButton'
import { useNavigate } from 'react-router-dom'

const stepStyle = {
  width: '16px',
  height: '16px',
  minWidth: 'unset',
  p: 'unset',
  cursor: 'auto'
}

export default function Profile () {
  const dispatch = useDispatch()
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(async () => {
    dispatch(setPage('Mapeamento de perfil'))
    const response = await dispatch(findAllQuestions())
    if (response.payload.status === 'success') {
      setQuestions(response.payload.data)
    } else {
      toast({
        description: 'Não foi possível carregar as questões.',
        id: 'findAllQuestions',
        status: 'error'
      })
      navigate('/home')
    }
  }, [])

  const [questions, setQuestions] = useState([])
  const [actualPage, setActualPage] = useState(0)
  const [response, setResponse] = useState({})

  const inputResponse = (event) => {
    setResponse({ ...response, [event.target.name]: event.target.value })
  }
  const radioResponse = (event) => {
    setResponse({ ...response, [questions[actualPage].id]: event })
  }

  const prevPage = () => {
    setActualPage(actualPage - 1)
  }

  const nextPage = () => {
    if (Object.values(response).length > actualPage) {
      setActualPage(actualPage + 1)
    } else {
      toast({
        description: 'Para seguir para a próxima questão, por favor responda a atual.',
        id: 'answerQuestion',
        status: 'error'
      })
    }
  }

  const sendResponse = async () => {
    let answers = []

    Object.entries(response).map(([key, value] = a) => {
      if (key !== "3") {
        answers.push({
          questionId: key,
          answerId: value
        })
      }
    })

    const res = await dispatch(calculateMatch(answers))
    if (res.payload.status === 'success') {
      navigate('/country-matches')
    }
  }

  const questionResponse = () => {
    const question = []

    if (questions.length && questions[actualPage].answers) {
      const answers = []

      for (let i = 0; i < questions[actualPage].answers.length; i++) {
        answers.push(
          <Radio
            className={response[questions[actualPage].id] == questions[actualPage].answers[i].id && 'selected'}
            w="100%"
            value={questions[actualPage].answers[i].id}
            key={i}
          >
            {questions[actualPage].answers[i].description}
          </Radio>
        )
      }

      return (
        <RadioGroup name={actualPage} onChange={radioResponse} value={response[questions[actualPage].id]} w="80%">
          <Stack direction='column' w="100%">
            {answers}
          </Stack>
        </RadioGroup>
      )
    } else {
      question.push(
        <TextArea key={'question'} value={questions.length && response[questions[actualPage].id]} name={questions.length && questions[actualPage].id} onChange={inputResponse} placeholder={'Escreva sua resposta'} />
      )
    }

    return question
  }

  const steps = () => {
    const step = []
    for (let i = 0; i < questions.length; i++) {
      step.push(
        <RoundButton key={i} hasIcon={false} buttonStyle={{ ...stepStyle, bg: i === actualPage ? 'lightBlue' : 'black' }} />
      )
    }
    return step
  }

  return (
    <Flex id="login" maxWidth='600px' className="center">
      <Flex marginBottom={10}>
        <h1>{questions.length !== 0 ? questions[actualPage].description : 'Nenhuma pergunta a ser preenchida!'}</h1>
      </Flex>
      { questions.length !== 0 && questionResponse() }
      <Flex marginTop={10} alignItems='center' gap={3}>
        {questions.length !== 0 && actualPage !== 0 && <RoundButton icon="left" onClick={prevPage} />}
        {/* {questions.length !== 0 && steps() } */}
        {questions.length !== 0 && (actualPage === questions.length - 1 ? <RoundButton icon="done" onClick={sendResponse} /> : <RoundButton onClick={nextPage} />)}
      </Flex>
    </Flex>
  )
}
