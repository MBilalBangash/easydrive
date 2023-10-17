import logo from "./logo.svg";
import "./App.css";
import Home from "./home/Home";
import Navber from "./navber/Navber";
import Services from "./services/Services";
import Price from "./price/Price";
import AboutUs from "./aboutus/AboutUs";
import Contact from "./contact/Contact";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App;
