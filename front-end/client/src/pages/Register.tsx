import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContex'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
export default function Register() {
    const { register, handleSubmit,formState:{
        errors
    }  } = useForm()
    const { signUp, isAuthenticated, errors: RegisterError } = useAuth()
    const navigation = useNavigate()
    const onSubmit = handleSubmit( async (values)=>{
        signUp(values)
    })
    useEffect(()=>{
        if(isAuthenticated) navigation('/tasks')
    },[isAuthenticated])
  return (
    <div className=' bg-zinc-800 max-w-md rounded-md m-auto'>
        {
            RegisterError?.map((error,i)=>(
                <div key={i} className=' bg-red-500 text-white'>
                    {error}
                </div>
            ))
        }
        <form onSubmit={onSubmit}>
            <input type="text" {...register('username',{ required: true })}name="username" className='w-full bg-zinc-700  text-white p-3 rounded-md my-2' placeholder='username'  />
            {
                errors.username && (
                    <p className=' text-red-500'> Username is required</p>
                )
            }
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
                Register
            </button>
        </form>
        <p className='flex gap-x-2 justify-between'>
            Don't have an account?
            <Link className=' text-emerald-500' to="/login">Sign in</Link>
        </p>
    </div>
  )
}