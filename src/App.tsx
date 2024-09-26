import { useEffect, useState } from "react";
import Home from "./pages/home";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4000/api/verify/user', {
      method: "get",
      credentials: "include",
      headers: {
        // needed so express parser says OK to read
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(result => {
        if (result.data) {
          setUser(result.data)
        }
      });
  }, []);

  return (
    <div className="App">
      <Home data={user} />
    </div>
  )
}

export default App
