import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRouteCandidate = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.candidate);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!isAuthenticated) {
      console.log("Not authenticated, redirecting to main");
      navigate("/");
    }
  }, [isAuthenticated, navigate]);
  
  // Return null or a loading indicator while checking authentication
  // if (!isAuthenticated) {
  //   return null; // Or return <LoadingSpinner /> if you have one
  // }
  
  // Only render children if authenticated
  return children;
};

export default ProtectedRouteCandidate;