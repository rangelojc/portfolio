import "@/styles/fonts.css";
import "@/styles/utils.css";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Recommendations from "../components/Recommendations";
import Skills from "../components/Skills";

function App() {
  return (
    <main className="h-screen w-screen overflow-auto" id="appScrollContainer">
      <Hero />
      <div className="space-y-40">
        <Skills />
        <Projects />
        <Recommendations />
      </div>

      <Footer />
    </main>
  );
}

export default App;
