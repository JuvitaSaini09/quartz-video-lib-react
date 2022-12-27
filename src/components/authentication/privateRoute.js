import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/home";
  return token ? <Outlet /> :<Navigate to="/loginPage" replace={true} /> ;
};

