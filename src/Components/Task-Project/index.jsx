import { useState } from 'react'
import './style.css'

let keyword = 0

function TaskManager(){
    const [tasked,setTask] = useState([])
    const [name,setName] = useState('')

    function addTask(){
        setTask([...tasked,{
            id:keyword++,
            name:name,
            completed:false
    }])
    
    setName('')
    }

function completedTask(taskID) {
    setTask(tasked.map(task => 
        task.id === taskID ? { ...task, completed: !task.completed } : task
    ));
}

return(
   <div className='taskBody'>
        <h1>Task Manager</h1>
        <input type="text" value={name}onChange={((e) => setName(e.target.value))}/>
        <utton onClick={addTask} className='add'>Add</utton>
        <div className='listBody'>
        <ul>{
            tasked.map( task =>{
                return(
                    <li key={task.id} className={task.completed ? "line-through":""}>
                    {task.name} 
                    
                        <button 
                            onClick={
                            ()=>{
                                
                                setTimeout(()=>{
                                setTask(tasked.filter(a => a.id !== task.id))},1000)
                                }}
                                className='remove'
                            >
                            Delete
                        </button>

                        <button onClick={()=>completedTask(task.id)} className={task.completed ? "Uncompleted" : "Completed"}>
                            {task.completed ? "Uncompleted" : "Completed"}
                        </button>
                    </li>
                )
            }
            )
        }</ul>
        </div>
    </div>
)

}

export default TaskManager