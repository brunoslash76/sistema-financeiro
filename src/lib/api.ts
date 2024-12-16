import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api/',
  timeout: 20000,
  prepareHeaders: (headers, { getState }) => {
    // TODO: Add authentication interceptors
    // const token = (getState() as RootState).auth.credentials.accessToken

    // if (token) {
    //   headers.set('authorization', `Bearer ${token}`)
    // }

    // return headers
  }
})

export const api = createApi({
  keepUnusedDataFor: 0,
  refetchOnReconnect: true,
  reducerPath: 'SistemaFinanceiro',
  tagTypes: [],
  baseQuery,
  endpoints: () => ({})
})
