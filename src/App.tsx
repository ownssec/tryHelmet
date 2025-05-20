import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);

  // const apiUrl = "http://localhost:8001/api/v1";
  const apiUrl = "https://ghi-portal-testing.onrender.com/api/v1";
  console.warn("DEBUGPRINT[89]: App.tsx:9: apiUrl=", apiUrl);

  const loginTest = async () => {
    setCount((count) => count + 1);
    const setdata = {
      email: "asd@gmail.com",
      password: "e",
    };

    console.warn("DEBUGPRINT[90]: App.tsx:14: setdata=", setdata);
    await axios
      .post(`${apiUrl}/auth/signIn`, setdata)
      .then((res) => {
        console.log("DEBUGPRINT[87]: App.tsx:12: res=", res);
        return res;
      })
      .catch((err) => {
        console.log("DEBUGPRINT[88]: App.tsx:22: err=", err);
        return err;
      });
  };

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => loginTest()}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
