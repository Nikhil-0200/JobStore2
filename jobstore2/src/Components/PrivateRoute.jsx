import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children})=>{
const {isAuthenticated, loginWithRedirect} = useAuth0()

    return isAuthenticated ? children : <Navigate to={loginWithRedirect()} />
}

export default PrivateRoute;