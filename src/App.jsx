import React from "react";
import { useState,useEffect } from "react";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Team from "./Components/Team";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";



const App = () => {
  const [activeNav, setActiveNav] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTo = (id) => {
    setActiveNav(id);
    document
      .getElementById(id.toLowerCase())
      ?.scrollIntoView({ behavior: "smooth" });
  };
  
  
  return (
    <div className=" overflow-x-hidden font-sans">
      {" "}
      <Navbar activeNav={activeNav} onNav={scrollTo} scrolled={scrolled} />{" "}
      <Hero onNav={scrollTo} /> <About /> <Services /> <Projects /> <Team />{" "}
      <Contact /> <Footer />{" "}
    </div>
  );
  
}

export default App