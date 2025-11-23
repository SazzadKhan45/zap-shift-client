import { Navigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import { FadeLoader, RingLoader } from "react-spinners";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center my-24">
        <RingLoader color="#08791d" />
      </div>
    );
  }
  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
