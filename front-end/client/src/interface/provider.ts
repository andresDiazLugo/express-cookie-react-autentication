interface User{
    email: string,
    password: string,
    username: string,
}


export type TodoContextType = {
    user: User | null;
    signUp : (user:any)=>void,
    isAuthenticated: boolean,
    errors: string[],
    sigin: (user:any)=>void,
    loading: boolean,
    logout:()=>void
}