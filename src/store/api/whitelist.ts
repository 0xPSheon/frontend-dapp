// ** Redux Imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// ** Config
import authConfig from 'src/configs/auth'

// ** Types
import {
  CheckWhitelistParamsType,
  CheckWhitelistTransformResponseType,
  CheckWhitelistResponseType
} from 'src/types/api/whitelistTypes'

const WHITELIST_API_REDUCER_KEY = 'whitelistApi'
export const whitelistApi = createApi({
  reducerPath: WHITELIST_API_REDUCER_KEY,
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL as string,
    prepareHeaders: headers => {
      const storedToken = window.localStorage.getItem(authConfig.storageTokenKeyName)!
      headers.set('Authorization', `Bearer ${storedToken}`)

      return headers
    }
  }),
  endpoints: builder => ({
    checkWhitelist: builder.query<CheckWhitelistResponseType, CheckWhitelistParamsType>({
      query: params => ({
        url: '/api/whitelist/check',
        method: 'POST',
        body: params
      }),
      transformResponse: (responseData: CheckWhitelistTransformResponseType) => responseData
    })
  })
})

export const { useCheckWhitelistQuery } = whitelistApi
