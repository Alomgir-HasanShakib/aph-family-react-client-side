import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/authcontext/Authentication";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(AuthContext);
  if (user) return children;
  if (loader) return <Skeleton count={5} />;

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
