import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";


const ProtectedRouteEmployer = ({children}) => {

   
      const { isAuthenticated: isEmployerAuthenticated } = useSelector((state) => state.employer);
    const navigate = useNavigate()

  

    useEffect(() => {
      if (!isEmployerAuthenticated) {
        
        navigate("/");
      }
    }, [isEmployerAuthenticated, navigate]);
    
  return children
  
}

export default ProtectedRouteEmployer;