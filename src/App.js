import { useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import Login from "./components/Login.tsx";
import Mainpage from "./components/Mainpage.tsx";
import Signup from "./components/Signup.tsx";


function App() {
  const [isAuth, setIsAuth] = useState(false)

  return (
    <Routes>
      <Route path="/" element={<Mainpage setIsAuth={setIsAuth}/>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup setIsAuth={setIsAuth}/>}></Route>
    </Routes>
  );
}

export default App;
