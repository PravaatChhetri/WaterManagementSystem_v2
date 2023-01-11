import { Outlet, Navigate } from 'react-router-dom'


const ProtectedRoutes = () => {
    let auth = {'token':true}

    const user = JSON.parse( localStorage.getItem("user"))



    return(
        user ? <Outlet/> : <Navigate to="/login"/>);
}

export default ProtectedRoutes