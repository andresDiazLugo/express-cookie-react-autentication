import axios from './axios';
const API = 'http://localhost:3000/api'
export const registerRequest = ( user: any ) => axios.post(`/register`,user)

export const loginRequest =  ( user: any ) => axios.post(`/login`,user)

export const veriFyTokenRequest = (token:string) => axios.get('/verify')

