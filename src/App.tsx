import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "@fontsource-variable/sora";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About Me";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import DynamicHead from "./components/DynamicHead";

const App = () => {
  return (
    <div className="bg-lime-400/20">
      <DynamicHead />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Services />
                <About />
                <Testimonials />
                <Contact />
              </>
            }
          />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default App;
