import {atom,selector} from 'recoil'

export const todoList=atom({     
    key:"todoLists",
    default:[{
        id: 1,
        title: 'Finish coding assignment',
        description: 'Write JavaScript code for the assignment',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Go to the gym',
        description: 'Work out for an hour',
        isCompleted: true,
    }]
})

export const todoFilterState=atom({
    key:'todoFilterState',
    default:'Show All'
})


export const filterSearchState=atom({
    key:'filterSearchState',
    default:''
})

export const filteredTodoList=selector({
    key:'filteredTodoList',
    get:({get})=>{
        const filter=get(todoFilterState)
        const myList=get(todoList)
        const search=get(filterSearchState)


        const list=myList.filter((items)=>(items.description.toLowerCase().includes(search.toLowerCase())||
    items.title.toLowerCase().includes(search.toLowerCase())
    ))

    switch(filter){
        case 'Show Completed':
            return list.filter((item)=>item.isCompleted)
        
        case 'Show Incompletd':
            return list.filter((item)=>!item.isCompleted)

        default:
            return list
    }

    }
})

export const listStat=selector({
    key:'listStat',
    get:({get})=>{
        const totalTodos=get(todoList).length
        const completedTodos=get(todoList).filter((item)=>item.isCompleted).length
        const incompletedTodos=totalTodos-completedTodos
        const percentageCompletd=   (totalTodos==0)?0:(completedTodos / totalTodos)*100

        return{
            totalTodos,
            completedTodos,
            incompletedTodos,
            percentageCompletd
        }
    }
    
})