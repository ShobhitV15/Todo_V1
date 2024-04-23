import React from 'react'
import { useRecoilValue } from 'recoil'
import { listStat } from '../store/atom'

const DisplayStat = () => {
    const stat=useRecoilValue(listStat)
  return (
    <div>
        <h5>Total : {stat.totalTodos}</h5>
        <h5>Completed : {stat.completedTodos}</h5>
        <h5>Incompletd : {stat.incompletedTodos}</h5>
        <h5>Task Left : {stat.percentageCompletd.toFixed(2)}%</h5>
    </div>
  )
}

export default DisplayStat