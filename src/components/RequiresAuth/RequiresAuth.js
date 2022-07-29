import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext/authContext";


export function RequiresAuth({ children }) {
    const {isLoggedIn}=useAuth();
    const location=useLocation();
    return isLoggedIn ? children : <Navigate  state={{from:location}} to="/loginPage" replace/>;
  }
  