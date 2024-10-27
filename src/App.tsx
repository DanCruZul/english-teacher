import { useState, useEffect } from "react";
import "@fontsource-variable/sora";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import DynamicHead from "./components/DynamicHead";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Classes from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";
import NotFound from "./components/NotFound";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <DynamicHead />
        <ScrollToTop />
        <main className="min-h-screen bg-white">
          {isLoading && <LoadingScreen />}
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Classes />
                  <About />
                  <Testimonials />
                  <Contact />
                </>
              }
            />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </main>
      </Router>
    </LanguageProvider>
  );
}

export default App;
