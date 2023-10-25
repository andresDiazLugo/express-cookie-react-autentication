import { useTasks } from "../context/TaskContext"
import { useEffect } from 'react'
export default function TaskPage() {
  const { getTasks,tasks } = useTasks()

  useEffect(()=>{
    getTasks()
  },[])

  if(tasks.length == 0){
    return (<span>No hay tareas</span>)
  }
  return (
    <div>
      {
        tasks?.map(task => (
          <div key={task._id}>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
          </div>
        ))
      }
    </div>
  )
}