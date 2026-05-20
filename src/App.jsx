import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import MouseGlow from "./components/MouseGlow";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import Stats from "./sections/Stats";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Leadership from "./components/Leadership";
import Contact from "./sections/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <MouseGlow />

      <Navbar />

      <Hero />

      <Stats />

      <About />

      <Projects />

      <Skills />

      <Experience />

      <Leadership />

      <Contact />
    </>
  );
}

export default App;
