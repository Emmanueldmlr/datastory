import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'
import { graphqlUrl } from 'config'
import { GET_DATA } from './query'
import { HYDRATE } from 'next-redux-wrapper'

export const dataApi = createApi({
  reducerPath: 'dataApi',
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
    getData: builder.query({
        query: ({measure, countries}) => ({
            document: GET_DATA,
            variables: { measure, countries },
            }),
    }),
  }),
})

export const { getData } = dataApi.endpoints