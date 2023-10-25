import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContex";

export default function Navbar() {
    const { isAuthenticated, logout,user } = useAuth()
  return (
    <nav className="bg-zinc-700 mmy-3 flex justify-between py-5 px-10 rounded-lg">
        <h1 className="text-2xl font-bold">Tasks Manager</h1>
        <ul className=" flex gap-x-2">
            {
               isAuthenticated ? (
                <>
                <li className=" bg-orange-500 p-2 text-center rounded-lg">
                    {user?.username}
                </li>
                <li>
                    <Link to='/add-task'>Add Task</Link>
                </li>
                <li>
                    <Link to='/' onClick={logout}>Logout</Link>
                </li>
                </>
               ) :
               (
                <>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Register</Link>
                    </li>
                </>
               )
            }
        </ul>
    </nav>
  )
}
