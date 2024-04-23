import React from 'react'
import { todoList } from '../store/atom'
import { useRecoilState } from 'recoil'


const DisplayTodo = ({todo}) => {
const [todoLists,setTodoList]=useRecoilState(todoList)
console.log(todo.title);

const index=todoLists.findIndex(listItem=>listItem==todo)


function toggleItem(){
  const newItem = {
    ...todo,
    isCompleted: !todo.isCompleted,
}
setTodoList(() => {
    return [...todoLists.slice(0, index), newItem, ...todoLists.slice(index + 1)]
})
}
function deleteItem(){
  setTodoList(()=>{
    return [...todoLists.slice(0,index), ...todoLists.slice(index+1)]
  })
}


  return (

    <div style={{padding:'15px',display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'10px'}}>

      <div style={{border:'1px solid black', padding:'5px' , width:"500px"}}>

      <h3>{todo.title}</h3>


       <p>{todo.description}</p>
      </div>
       

       <input type="checkbox" onChange={toggleItem}  checked={todo.isCompleted}/>
       <button onClick={deleteItem}>X</button>

    </div>
  )
}

export default DisplayTodo