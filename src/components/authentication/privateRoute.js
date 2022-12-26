import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
export const PrivateRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  console.log("going to private page location --> ",location)
  let from = location?.state?.from?.pathname || "/home";
  // Hihello by
  return token ? <Outlet /> :<Navigate to="/loginPage" replace={true} /> ;
};
