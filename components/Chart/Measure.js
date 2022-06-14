import React from 'react'
import {Box, Select} from '@chakra-ui/react'

const Measure = () => {

  return (
    <Box w="full">
        <Select size='md' borderColor="gray" placeholder='Select Measure'>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
        </Select>
    </Box>
  )
}

export default Measure
