import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Features from "./components/Features";
import Customers from "./components/Customers";
import Staff from "./components/Staff";
import Ebook from "./components/Ebook";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Features />
      <Customers />
      <Staff />
      <Ebook />
      <Footer />
    </div>
  );
};

export default App;
