import { gql } from 'graphql-request'

export const GET_MEASURES = gql`
    query Measures{
        cube_country_year(distinct_on: measure) {
            measure
            entity_by_measure {
              triple_by_subject(where: { property: { _eq: "name" } }) {
                i18n {
                  en
                }
              }
            }
        }
    }
`