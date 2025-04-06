import "@/styles/fonts.css";
import "@/styles/utils.css";
import ClickSpark from "../components/ClickSpark";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Experiences from "./fragments/Experiences";
import Footer from "./fragments/Footer";
import Hero from "./fragments/Hero";
import Intro from "./fragments/Intro";
import Projects from "./fragments/Projects";
import Recommendations from "./fragments/Recommendations";
import Skills from "./fragments/Skills";

function App() {
  return (
    <ClickSpark
      sparkColor="#afb296"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <main className="h-screen w-screen overflow-auto" id="appScrollContainer">
        <Hero />
        <div className="space-y-40">
          <Intro />
          <Experiences />
          <Skills />
          <Projects />
          <Recommendations />

          <ScrollToTopButton />
        </div>

        <Footer />
      </main>
    </ClickSpark>
  );
}

export default App;
