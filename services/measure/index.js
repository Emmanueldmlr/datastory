import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { graphqlUrl } from 'config'
import { GET_MEASURES } from './query'
import { HYDRATE } from 'next-redux-wrapper'


export const measureApi = createApi({
  reducerPath: 'measureApi',
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
    return null
  },
  refetchOnMountOrArgChange: 30,
  refetchOnFocus: true,
  baseQuery: graphqlRequestBaseQuery({ url: graphqlUrl }),
  endpoints: (builder) => ({
    getMeasures: builder.query({
      query: () => ({document: GET_MEASURES}),
    }),
  }),
})


export const { useGetMeasuresQuery } = measureApi
