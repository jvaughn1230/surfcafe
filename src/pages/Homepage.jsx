import React from "react";
import Hero from "../components/hero/Hero";
import About from "../components/About";
import Chef from "../components/Chef";
import Contact from "../components/Contact";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <About />
      <Chef />
      <Contact />
    </main>
  );
};

export default Homepage;
