import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componenets/Navbar";
import Details from "./componenets/Details";
import Home from "./componenets/Home";
import Edit from "./componenets/Edit";
import Register from "./componenets/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
