/* eslint-disable @typescript-eslint/no-explicit-any */
import React,{  createContext,ReactDOM, useState,useContext, useEffect } from 'react'
import { registerRequest, loginRequest, veriFyTokenRequest } from '../api/auth'
import { TodoContextType } from '../interface/provider' 
import Cookies from 'js-cookie'

interface Props {
    children: any 
}

export const AuthContext = createContext<TodoContextType | null>(null)
export const useAuth = ()=>{
    const context = useContext(AuthContext)
    if(!context){
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}

export const AuthProvider = ({
    children
}:Props ) => {
    const [user, setUser] = useState(null)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [errors, setErrors] = useState([])
    const [loading, setLoading] = useState(true)
    
    const signUp = async (user:any) => {
        try {
        console.log(user);
        const res = await registerRequest(user)
        console.log(res.data)
        setUser(res.data)
        setIsAuthenticated(true)
        } catch (error:any) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data)
            }
            const ss:any = []
            ss.push(error.response.data.message)
            setErrors(ss)
        }
        
    }
    const sigin = async (user:any)=>{
        try {
            const res = await loginRequest(user)
            console.log(res.data)
            setUser(res.data)
            setIsAuthenticated(true)
        } catch (error:any) {
            setErrors(error.response.data)
        }
    }
    const logout =  ()=>{
        Cookies.remove("token")
        setIsAuthenticated(false)
        setUser(null)
    }
    useEffect(()=>{
        if(errors.length > 0){
            const timer = setTimeout(()=>{
                setErrors([])
            },3000)
            return () => clearTimeout(timer)
        }
    },[errors])
    useEffect(() => {
        async  function checkLogin(){
            const cookies:any = Cookies.get()
        if(!cookies.token){
            setIsAuthenticated(false)
            setLoading(false)
            setUser(null)
            return;
        }
        try {
            const res:any = await veriFyTokenRequest(cookies.token)        
            // console.log("esta es la respuesta",res.data) 
            if(!res.data){
                setIsAuthenticated(false)
                setLoading(false)
                return;
            }
            setLoading(false)
            setIsAuthenticated(true)
            setUser(res.data)
         } catch (error) {
             console.log(error)
             setIsAuthenticated(false)
             setUser(null)
             setLoading(false)
         }
        }
        checkLogin()
    },[])
    return(
        <AuthContext.Provider value={{
            signUp,   
            user,
            isAuthenticated,
            errors,
            sigin, 
            loading,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
