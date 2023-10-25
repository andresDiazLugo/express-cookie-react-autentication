import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider }  from './context/AuthContex'
import Register from './pages/Register';
import Login from './pages/Login';
import TaskFormPage from './pages/TaskFormPage';
import TaskPage from './pages/TaskPage';
import Profile from './pages/Profile';
import HomePage from './pages/HomePage';
import ProtectedRoute from './ProtectedRoute';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Navbar';
function App() {

  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route element={<ProtectedRoute/>}>
              <Route path='/tasks' element={<TaskPage/>}/>
              <Route path='/add-task' element={<TaskFormPage/>}/>
              <Route path='/tasks/:id' element={<TaskFormPage/>}/>
              <Route path='/profile' element={<Profile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  )
}

export default App
