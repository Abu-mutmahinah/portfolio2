import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Fact from "./Components/FunFact/Fact";
import Home from "./Components/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Service from "./Components/Services/Service";
import Testimonial from "./Components/Testimonial/Testimonial";

function App() {
  return (
    <div className="">
      <NavBar />
      <Home />
      <About />
      <Service />
      <Fact />
      <Portfolio />
      <Testimonial />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
