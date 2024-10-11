import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./utils/index.js"
import { useSelector } from "react-redux";
import { RootState } from "./redux/store.js";

function App() {
  const navigate = useNavigate();
  const dataUser = useSelector((state: RootState) => state.data)

//userSession

  useEffect(() => {
    if (dataUser.isLogin === true) {
      navigate('/home')
    }
    return () => {};
  }, [])
  return <Navigate to="/home" />
}


export default App;
