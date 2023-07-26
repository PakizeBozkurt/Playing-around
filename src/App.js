import React from "react";
// components
import Banner from "./components/Banner";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import './index.css';
const App = () => {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
    
      <Header />
      <Banner />
      <NavBar />
      <About />
      <Contact />

      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
};

export default App;
