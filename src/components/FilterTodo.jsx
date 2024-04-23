import React from 'react'
import {  todoFilterState, filterSearchState } from '../store/atom'
import { useSetRecoilState,useRecoilState } from 'recoil'

const FilterTodo = () => {

    const [filterState,setFilterState]=useRecoilState(todoFilterState)   

    const setFilterSearch=useSetRecoilState(filterSearchState)

    function handleUpdateFilter(e){
        setFilterState(e.target.value)
    }

    function handleSearchFilter(e){
        setFilterSearch(e.traget.value)
    }

  return (
    <div>


        <input type="text" placeholder='search' onChange={handleSearchFilter}/>


        <select  value={filterState}   onChange={handleUpdateFilter}>  

            <option value="Show All">All</option>
            <option value="Show Completed">Completed</option>
            <option value="Show Incompleted">Incompleted</option>
        </select>
        
    </div>
  )
}

export default FilterTodo