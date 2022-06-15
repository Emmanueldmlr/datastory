import React, {useState, useEffect} from 'react'
import Measure from '@components/Chart/Measure'
import {Box, Stack} from "@chakra-ui/react"
import Category from './Category'
import Chart from './Chart'
import { useSelector } from 'react-redux'
import { getData } from 'services/data'
import { store } from 'store/store'


const DataView = () =>  {
    const [selectedMeasure, setSelectedMeasure] = useState("lifeExpectancy")
    const categories = useSelector((state) => state.category.categories)
    const [data, setData] = useState(null)

    const reworkData = (originalDataArray) => {
        const updatedData = originalDataArray.map(({
            country: group,
            ...rest
          }) => ({
            group,
            ...rest
          }));

        return updatedData
    }

    const fetchData = async() => {
        const selectedCountries = []
         categories.forEach((category) => {
            if(category.isSelected){
                selectedCountries.push(category.id)
            }
        })
        const result = await store.dispatch(getData.initiate({measure:selectedMeasure, countries: selectedCountries}))
        if(result.data){
            setData(reworkData(result.data.cube_country_year))
        }
    }

    useEffect(()=> {
        fetchData()
    }, [categories, selectedMeasure])

  return (
    <Box>
        <Box justifyContent={{base:"center", lg:"flex-end"}} display="flex">
            <Stack  flexDirection={{base: "column-reverse", lg: "row"}}>
                <Category/>
                <Measure selectedMeasure={selectedMeasure} setSelectedMeasure={setSelectedMeasure}/>
            </Stack>    
        </Box>
        {
            data && 
            <Box justifyContent="center" display="flex"  mt={16}>
                <Chart data={data} measure={selectedMeasure}/>
            </Box>
        }
    </Box>
    
  )
}

export default DataView