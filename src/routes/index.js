import React from "react";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "../pages/Home";

const About = () => <h1>About Page</h1>;
const Contact = () => <h1>Contact Page</h1>;

const PublicRoutes = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );

export default PublicRoutes;
