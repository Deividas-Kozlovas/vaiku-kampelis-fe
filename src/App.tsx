import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import ColoringPage from "./pages/printables/ColoringPage";
import NumbersList from "./pages/games/numberGames/findNumberByWord/FindNumberByWord";
import AlphabetGame from "./pages/games/lettersGames/findAlphabetLetters/FindAlphabetLetters";
import ColorMatchGame from "./pages/games/colorGames/findColorByWord/FindColorByWord";
import BathroomItemsGame from "./pages/games/findImageByWord/FindImageByWord";
import MathPage from "./pages/printables/MathPage";

function AppContent() {
  const location = useLocation();

  // Paths where you don't want Navbar and Footer, e.g. games
  const hideNavFooterPaths = [
    "/zaidimai/rask-skaiciu-pagal-zodi",
    "/zaidimai/rask-raides",
    "/zaidimai/rask-spalvas",
    "/zaidimai/rask-vonios-diagtus",
    // add more game routes here if needed
  ];

  const hideNavFooter = hideNavFooterPaths.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-purpleLight via-pinkAccent to-yellowAccent font-sans">
      {!hideNavFooter && <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apie-mus" element={<AboutUsPage />} />
          <Route
            path="/spauzdinti/spalvinimo-lapai"
            element={<ColoringPage />}
          />
          <Route path="/kontaktai" element={<ContactUsPage />} />
          <Route path="/privatumo-politika" element={<PrivacyPolicyPage />} />
          <Route
            path="/zaidimai/rask-skaiciu-pagal-zodi"
            element={<NumbersList />}
          />
          <Route path="/zaidimai/rask-raides" element={<AlphabetGame />} />
          <Route path="/zaidimai/rask-spalvas" element={<ColorMatchGame />} />
          <Route
            path="/zaidimai/rask-vonios-diagtus"
            element={<BathroomItemsGame />}
          />
          <Route path="/spauda/spalvinimo-lapai" element={<ColoringPage />} />
          <Route
            path="/spauda/matematikos-spalvinimo-lapai"
            element={<MathPage />}
          />
        </Routes>
      </main>

      {!hideNavFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
