import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // showing loading state to the user untill the onAuthChange has the user details
  if (loading) {
    return (
      <span className="h-1/2 loading loading-infinity loading-lg"></span>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/signup" replace></Navigate>;
};

export default PrivateRoute;
