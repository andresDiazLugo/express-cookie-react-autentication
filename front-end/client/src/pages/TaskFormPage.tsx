import { useForm } from 'react-hook-form'
import { useTasks } from '../context/TaskContext'
export default function TaskFormPage() {
  const { register,handleSubmit } = useForm()
  const { tasks, createTask } = useTasks()
  const onSubmit = handleSubmit((data)=>{
    createTask(data)
  })
  return (
    <div className=' bg-zinc-800 max-w-md w-full p-10 rounded-md '>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Title" 
          {...register("title")}
          className='w-full bg-slate-700 text-white px-4 py-2 rounded-md'
          autoFocus
        />
        <textarea
          rows={3}
          placeholder="Description"
          {...register("description")}
          className='w-full bg-slate-700 text-white px-4 py-2 rounded-md'
          

        >
        </textarea>
        <button>Save</button>
      </form>
    </div>
  )
}