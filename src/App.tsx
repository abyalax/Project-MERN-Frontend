import { useEffect } from "react";
import useUserSession from "./hooks/use-session";
import { Link, useNavigate } from "react-router-dom";

function App() {
  const userSession = useUserSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userSession.loading) {
      navigate('/home')
    }
  }, [navigate, userSession.loading])
  return (
    <div className="App">
      <Link to={"/home"}>Ke Halaman Product</Link>
    </div>
  )
}


export default App;
