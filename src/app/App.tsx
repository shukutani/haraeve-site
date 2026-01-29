import { Hero } from "./components/Hero";
import { Activities } from "./components/Activities";
import { Guide } from "./components/Guide";
import { Rules } from "./components/Rules";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-yellow-50">
      <Hero />
      <Activities />
      <Guide />
      <Rules />
      <Footer />
    </div>
  );
}