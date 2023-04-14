import React from "react";
import "./App.css";
import { Navbar } from "react-bootstrap";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
