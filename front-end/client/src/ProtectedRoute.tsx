import { useAuth } from "./context/AuthContex"
import { Navigate,Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    const  { user, isAuthenticated, loading } = useAuth()
    console.log(user,isAuthenticated)
    if(loading) return <h1>Loading...</h1>
    if(!loading && !isAuthenticated) return <Navigate to='/login' replace/>
  return (
    <Outlet/>
  )
}