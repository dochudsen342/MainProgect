import { getAuthData } from "entities/User";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface RequireAuthProps {
    children:ReactNode
}


export const RequireAuth = ({ children }:RequireAuthProps) => {
  const auth = useSelector(getAuthData);

  if (!auth) {
    return <Navigate to={RoutePath.main}/>;
  }
 

  return children;
};

export default RequireAuth;