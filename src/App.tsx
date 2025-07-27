import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-purpleLight via-pinkAccent to-yellowAccent font-sans">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/apie-mus" element={<AboutUsPage />} />
            <Route path="/kontaktai" element={<ContactUsPage />} />
            <Route path="/privatumo-politika" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
