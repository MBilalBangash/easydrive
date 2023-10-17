import React from "react";
import "./Navber.css";
import Image from "../assets/steering-wheel-car_svgrepo.com.svg";
import { Link } from "react-router-dom";

const Navber = () => {
  return (

      <nav className="navbar-main">
        <div className="logo">
          <img src={Image} alt="" />
          <p>
            Easy<span className="logo span">Driver</span>4U
          </p>
        </div>
        <div class="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>
            
            <li>
              <Link to="/price">Price</Link>
            </li>
            <li>
              <Link to ="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
};

export default Navber;
