import { createContext, useContext, useState } from "react"
import { createTaskRequest, getTasksReuest } from '../api/tasks'
const TaskContext = createContext<{tasks:any[],createTask:(task:any) => void,getTasks:() => void}|null>(null);

export const useTasks = () => {
    const context = useContext(TaskContext)

    if(!context){
        throw new Error("useTask must be used be used within a TaskProvider")
    }

    return context
}

export function TaskProvider({children}: any){
    const [tasks,setTasks] = useState([])
    const getTasks = async () =>{
        try {
            const res = await getTasksReuest()
            setTasks(res.data)
            console.log(res)
        } catch (error) {
            console.error("surgio un error",error)
        }
        
    }
    const createTask = async(task:any)=>{
        const res = await createTaskRequest(task)
        console.log(res)
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
        }} >
            {children}
        </TaskContext.Provider>
    )
}