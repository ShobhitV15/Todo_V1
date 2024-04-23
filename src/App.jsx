// Creating a todo application using recoil




import InputTodo from "./components/InputTodo"
import FilterTodo from "./components/FilterTodo"
import DisplayStat from "./components/DisplayStat"
import { useRecoilValue } from "recoil"
import { filteredTodoList } from "./store/atom"
import DisplayTodo from "./components/DisplayTodo"

function App() {


  const todoList=useRecoilValue(filteredTodoList)

  console.log(todoList)
  

  return (
    <>
    <br />
    <DisplayStat></DisplayStat>
     <InputTodo></InputTodo>
     <br />
     <FilterTodo></FilterTodo>
     <br />
     {
      todoList.map((item)=>(
        <DisplayTodo key={todoList.indexOf(item)} todo={item}> </DisplayTodo>
      )
      )
    }
    </>

  

  )
}

export default App
