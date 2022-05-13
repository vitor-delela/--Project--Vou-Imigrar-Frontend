import React, { useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { setPage } from '../store/pageSlice'
import { findAllQuestions } from '../store/mappingSlice'

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
      setQuestions([ // remove this to use the real data
        {
          id: 1,
          description: 'Qual a sua idade?',
          position: 1,
          questionType: 'OBJECTIVE',
          answers: [
            {
              id: 1,
              description: '-17',
              questionId: 1
            },
            {
              id: 2,
              description: '18 a 24',
              questionId: 1
            },
            {
              id: 3,
              description: '25 a 30',
              questionId: 1
            },
            {
              id: 4,
              description: '31 a 40',
              questionId: 1
            },
            {
              id: 5,
              description: '40+',
              questionId: 1
            }
          ]
        },
        {
          id: 2,
          description: 'Qual é a sua escolaridade?',
          position: 2,
          requirementId: 1,
          questionType: 'OBJECTIVE',
          answers: [
            {
              id: 6,
              description: 'Ensino médio',
              questionId: 2
            },
            {
              id: 7,
              description: 'Superior Incompleto',
              questionId: 2
            },
            {
              id: 8,
              description: 'Superior Completo',
              questionId: 2
            },
            {
              id: 9,
              description: 'Pós Graduação',
              questionId: 2
            },
            {
              id: 10,
              description: 'Mestrado ou Doutorado',
              questionId: 2
            }
          ]
        },
        {
          id: 3,
          description: 'Qual é a sua área de formação?',
          position: 3,
          questionType: 'ESSAY'
        }
      ])
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
    setActualPage(actualPage + 1)
  }

  const sendResponse = () => {
    console.log(response)
  }

  const questionResponse = () => {
    const question = []

    if (questions.length && questions[actualPage].answers) {
      const answers = []

      for (let i = 0; i < questions[actualPage].answers.length; i++) {
        answers.push(
          <Radio
            className={response[questions[actualPage].id] == questions[actualPage].answers[i].id && 'selected'}
            value={questions[actualPage].answers[i].id}
            key={i}
          >
            {questions[actualPage].answers[i].description}
          </Radio>
        )
      }

      return (
        <RadioGroup name={actualPage} onChange={radioResponse} value={response[questions[actualPage].id]} >
          <Stack direction='column'>
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
        {questions.length !== 0 && steps() }
        {questions.length !== 0 && (actualPage === questions.length - 1 ? <RoundButton icon="done" onClick={sendResponse} /> : <RoundButton onClick={nextPage} />)}
      </Flex>
      {Object.keys(response).length && <h1>{JSON.stringify(response)}</h1>}
    </Flex>
  )
}
