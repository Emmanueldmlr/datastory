import React from 'react'
import { Stack, Checkbox } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCategories } from 'store/slices/category-slice'

const ActiveCountry = () => {
  const categories = useSelector((state) => state.category.categories)
  const dispatch = useDispatch()
  const handleChange = (id, state) => {
    const findCategoryIndex = categories.findIndex(
      category => category.id === id,
    )
    const updatedCategories = [...categories]
    updatedCategories[findCategoryIndex] = {
      ...updatedCategories[findCategoryIndex],
      ...{ isSelected: !state },
    }
    dispatch(updateCategories(updatedCategories))
  }
  return (
    <Stack spacing={[1, 6]} direction={['column', 'row']}>
        {
          categories && categories.map(category => (
            <Checkbox onChange={()=>handleChange(category.id, category.isSelected)} size='md' key={category.id} colorScheme='green' isChecked={category.isSelected}>
                {category.name}
            </Checkbox>
          ))
        }
    </Stack>
  )
}

export default ActiveCountry
