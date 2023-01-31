import React from 'react'
import {Navigate, useLocation, Outlet} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import firebaseConfig from '../config/firebaseConfig';
const Auth = () => {
    const auth = getAuth(firebaseConfig)
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if(loading)
        return <h5>checking your account...</h5>
    else if(user){
        return <Outlet />;
    }
    return <Navigate to="/login" state={{ from: location }} replace />
    
}

export default Auth