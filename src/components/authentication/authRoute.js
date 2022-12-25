import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/authContext/AuthContext";
export const AuthRoute = ({ children }) => {
  const { token } = useAuth();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/home";
  return token ? <Navigate to="/" replace={true} /> : <Outlet />;
};
