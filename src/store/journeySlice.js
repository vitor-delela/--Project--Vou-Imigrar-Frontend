import { HTTP } from '../config/axios.config'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const startJourney = createAsyncThunk('api/journeys', async (request) => {
  let response
  try {
    response = await HTTP.post(
      '/journeys/new',
      {
        countryId: request.country
      }
    )
  } catch (_) {
    return {
      status: 'failed',
      message: 'Falha ao iniciar a jornada.'
    }
  }
  return {
    status: 'success',
    data: {
      ...response.data
    }
  }
})

export const getJourneyDetails = async (request) => {
  let response
  try {
    response = await HTTP.get(`/journeys/details/${request.countryId}`)
  } catch (_) {
    return {
      status: 'failed',
      message: 'Jornada não iniciada.'
    }
  }
  return {
    status: 'success',
    data: {
      ...response.data
    }
  }
}

export const getCountry = async (request) => {
  let response
  try {
    response = await HTTP.get(`/countries/findById/${request.countryId}`)
  } catch (_) {
    return {
      status: 'failed',
      message: 'País não encontrado.'
    }
  }
  return {
    status: 'success',
    data: {
      ...response.data
    }
  }
}

export const postFinishJourney = async (request) => {
  let response
  try {
    response = await HTTP.post(`/journeys/finish/${request.countryId}`)
  } catch (_) {
    return {
      status: 'failed',
      message: 'Jornada para esse país ainda não iniciada.'
    }
  }
  return {
    status: 'success',
    data: {
      ...response.data
    }
  }
}

export const getUserStatusAndJourneys = createAsyncThunk(
  'api/journeys/status',
  async (request) => {
    let response
    try {
      response = await HTTP.get('/journeys/status')
    } catch (_) {
      return {
        status: 'failed',
        message: 'Erro ao buscar status.'
      }
    }
    return {
      status: 'success',
      data: response.data
    }
  }
)
