import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Signin from "./components/Signin";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstScreen from "./components/FirstScreen";

function App() {
  return (
    // <>
    //   <Home />
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/first" element={<FirstScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
