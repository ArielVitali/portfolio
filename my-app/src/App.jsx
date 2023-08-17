import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
