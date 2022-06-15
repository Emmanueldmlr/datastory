import { Box, Container, Text, Heading, VStack} from '@chakra-ui/react'
import React from 'react'
import DataView from '@components/Chart/DataView'
import { store } from 'store/store'

const DataExplorer = () => {
  return (
    <Container maxW={{ base: '7xl', xl: '7xl', '2xl': '80%' }} py={8}>
      <VStack spacing={8} mt={8}>
        <Heading as="h1" size="xl" letterSpacing="wide">
          Data Explorer
        </Heading>
        <Text fontSize="lg">
            Explore country data using Datastory
        </Text>
        <Box w="full">
            <DataView/>
        </Box>
      </VStack> 
    </Container>
  )
}

export default DataExplorer
