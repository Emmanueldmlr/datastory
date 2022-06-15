import { gql } from 'graphql-request'

export const GET_DATA = gql`
    query Data($measure: String!, $countries: [String]){
        cube_country_year(
            where: {
              measure: { _eq: $measure}
              country: {
                _in: $countries
              }
            }
          ) {
            year
            country
            value
          }
    }
`