import "@/styles/fonts.css";
import "@/styles/utils.css";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

function App() {
  return (
    <main className="h-screen w-screen space-y-2 pb-40 overflow-auto">
      <Hero />
      <Skills />
    </main>
  );
}

export default App;
