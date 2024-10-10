import { useEffect } from "react";
import useUserSession from "./hooks/use-session";
import { Navigate, useNavigate } from "react-router-dom";
import "./utils/index.js"

function App() {
  const userSession = useUserSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userSession.loading) {
      navigate('/home')
    }
    return () => {};
  }, [navigate, userSession.loading])
  return <Navigate to="/home" />
}


export default App;
