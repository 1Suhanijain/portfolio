import About from "./components/About";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
          </div>
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Contact />
          {/* </div> */}
          {/* <About />
        // <Experience />
        <Tech />
        <Works />
        <Feedbacks /> */}
          <div className="relative z-0">
            {/* <Contact />
          <StarsCanvas /> */}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
