import { Route, Routes } from "react-router-dom";
import Navbar from "../src/Pages/Shared/Navbar";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Login from "./Pages/Login/Login";
import Appointments from "./Pages/Appointments/Appointments";
function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/appointment" element={<Appointments />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
