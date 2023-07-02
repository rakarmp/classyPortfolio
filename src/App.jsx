import Archievements from "./components/Archievements";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navigation from "./components/Navigation";
import Quote from "./components/Quote";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Navigation />
      <Intro />
      <Experience />
      <Archievements />
      <Skills />
      <Quote />
      <Footer />
    </>
  );
}

export default App;
