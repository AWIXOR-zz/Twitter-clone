import { useState } from "react";
import {
  IndexRouteProps,
  LayoutRouteProps,
  Navigate,
  Outlet,
  PathRouteProps,
} from "react-router-dom";

const ProtectedRoute = (
  props: PathRouteProps | LayoutRouteProps | IndexRouteProps
) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};
export default ProtectedRoute;
