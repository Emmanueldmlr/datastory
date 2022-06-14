import React from 'react'
import Measure from '@components/Chart/Measure'
import {Box, HStack} from "@chakra-ui/react"
import Category from './Category'
import Chart from './Chart'



const DataView = () =>  {
  return (
    <Box>
        <Box justifyContent="flex-end" display="flex">
            <HStack spacing={6}>
                <Category/>
                <Measure/>
            </HStack>    
        </Box>
        <Box justifyContent="center" display="flex"   mt={16}>
            <Chart/>
        </Box>
    </Box>
    
  )
}

export default DataView