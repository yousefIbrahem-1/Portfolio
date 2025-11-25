import Header from "./components/Header";
import Landscape from "./components/Landscape";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Landscape />
        <About />
        <Skills />
        <Projects />
        <Experiences />
        <Education />
      </main>
      <Footer />
    </div>
  );
}

export default App;
