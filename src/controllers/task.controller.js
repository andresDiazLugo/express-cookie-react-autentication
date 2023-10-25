import Task from '../models/task.model.js'
export const getTasks = async (req, res) =>{
    const tasks = await Task.find({
        user : req.user.id
    }).populate('user')
    res.json(tasks)
}
export const createTasks = async (req, res) =>{
    const { title, description } = req.body
    const newTask = new Task({
        title,
        description,
        user: req.user.id
    })
    const savedTask = await newTask.save()
    res.status(200).json(savedTask)
}
export const getTask = async (req, res) =>{
    const taskFind = await Task.findById(req.params.id)
    if(!taskFind) return res.status(404).json({message: 'Task not found'})
    res.json(taskFind)
}
export const updateTask = async (req, res) =>{
    const taskFind = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    })
    if(!taskFind) return res.status(404).json({message: 'Task not found'})
    res.json(taskFind)
}
export const deleteTask = async (req, res) =>{
    const taskFind = await Task.findByIdAndDelete(req.params.id)
    if(!taskFind) return res.status(404).json({message: 'Task not found'})
    res.json(taskFind)
}
