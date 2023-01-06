import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import Services from "./components/Services";


function App() {
  return (
    <BrowserRouter>
      <nav className="main">
        <Link className="hover" to="/">Home</Link>
        <Link className="hover" to="/about">About</Link>
        <Link className="hover" to="/products">Products</Link>
        <Link className="hover" to="/services">Services</Link>
        <Link className="hover" to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App