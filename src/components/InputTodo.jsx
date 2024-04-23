import React, { useState } from 'react'
import { todoList } from '../store/atom'
import { useSetRecoilState } from 'recoil'


export default function InputTodo() {
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')

    const setTodo=useSetRecoilState(todoList)   // we are using this useStateRecoilState to access the set propperty 

    function handleAddTodo(){
        
        setTodo((oldLists)=>[   // here we need to understand that it automatically addressing our todoList as oldLists
            ...oldLists,{
                id:getId(),
                title:title,
                description:description,
                isCompleted:false
            }
        ])

        setTitle('');
        setDescription('');
        alert('todo added')


    }
  return (
    <div>
        <input type="text" placeholder='title'  onChange={(e)=>{setTitle(e.target.value)}}/>
        <input type="text" placeholder='description' onChange={(e)=>{setDescription(e.target.value)}} />
        <button onClick={handleAddTodo} >Add Todo</button>
    </div>
  )
}

let id=0
function getId(){
    return id++;
}

