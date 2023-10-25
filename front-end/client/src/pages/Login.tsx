import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContex'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
export default function Login() {
  const { register, handleSubmit, formState:{errors}} = useForm()
  const { sigin, errors: errorLogin,isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const onSubmit = handleSubmit((data)=>{
    sigin(data)
  })
  useEffect(()=>{
    if(isAuthenticated) return navigate('/tasks')
  },[isAuthenticated])
  
  return (
    <div className=' bg-zinc-800 max-w-md rounded-md m-auto'>
       {
            errorLogin?.map((error,i)=>(
                <div key={i} className=' bg-red-500 text-white text-center'>
                    {error}
                </div>
            ))
        }
      <form onSubmit={onSubmit}>
            <input type="email" {...register('email',{ required: true })} name="email" className='w-full bg-zinc-700  text-white p-3 rounded-md my-2' placeholder='email' />
            {
                errors.email && (
                    <p className=' text-red-500'> Email is required</p>
                )
            }
            <input type="password" {...register('password',{ required: true })} name="password" className='w-full bg-zinc-700  text-white p-3 rounded-md my-2'
            placeholder='password'
            />
             {
                errors.password && (
                    <p className=' text-red-500'> Password is required</p>
                )
            }
            <button>
                Login
            </button>
        </form>
        <p className='flex gap-x-2 justify-between'>
            Don't have an account?
            <Link className=' text-emerald-500' to="/register">Sign up</Link>
        </p>
    </div>
  )
}