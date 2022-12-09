import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./components/Home.tsx";
import Signup from "./components/Signup.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
    </Routes>
  );
}

export default App;
