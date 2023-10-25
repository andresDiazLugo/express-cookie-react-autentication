import axios from "./axios";

export const getTasksReuest = () => axios.get("/tasks")
export const getTaskRequest = (id:any) => axios.get(`/tasks/${id}`)
export const createTaskRequest = (task:any) => axios.post("/tasks",task)
export const updateTaskRequest = (task:any) => axios.put(`/tasks/${task._id}`, task)
export const deleteTaskRequest = (id:any) => axios.delete(`/tasks/${id}`)
