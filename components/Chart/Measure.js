import React from 'react'
import {Box, Select} from '@chakra-ui/react'
import { useGetMeasuresQuery } from 'services/measure'

const Measure = ({setSelectedMeasure, selectedMeasure}) => {
  const {data} = useGetMeasuresQuery()
  return (
    <Box w="full" pb={{base:10, lg:0}}>
        <Select value={selectedMeasure} onChange={(e)=>setSelectedMeasure(e.target.value)} size='md' borderColor="gray">
            {
              data && data.cube_country_year.map((dt) => (
                <option value={dt.measure} >{dt.entity_by_measure.triple_by_subject[0].i18n.en}</option>
              ))
            }
        </Select>
    </Box>
  )
}

export default Measure
