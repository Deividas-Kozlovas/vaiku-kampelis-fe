import { useState } from "react";
import { Link } from "react-router-dom";
// import { ChevronDown, ChevronUp } from "lucide-react"; // naudok lucide-react rodyklei

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // const toggleDropdown = (name: string) => {
  //   setOpenDropdown((prev) => (prev === name ? null : name));
  // };

  return (
    <header className="bg-white bg-opacity-80 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-extrabold text-purple-700"
          >
            <img src="/logo.svg" alt="" className="w-12 h-12 shrink-0" />
            <span>Vaiku Kampelis</span>
          </Link>

          <nav className="hidden md:flex space-x-6 text-purple-600 font-semibold items-center">
            <Link to="/" className="hover:text-purple-900 transition">
              Pagrindinis
            </Link>
            {/* <div className="relative">
              <button
                onClick={() => toggleDropdown("games")}
                className="flex items-center gap-1 hover:text-purple-900 transition"
              >
                Žaidimai{" "}
                {openDropdown === "games" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openDropdown === "games" && (
                <div className="absolute bg-white border mt-2 rounded shadow-lg w-52 text-sm z-50">
                  <Link
                    to="/zaidimai/matematika"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Matematika
                  </Link>
                  <Link
                    to="/zaidimai/gramatika"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Gramatika
                  </Link>
                  <Link
                    to="/zaidimai/zodziai"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Žodžiai
                  </Link>
                  <Link
                    to="/zaidimai/paveiksliukai"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Paveikslėliai
                  </Link>
                </div>
              )}
            </div> */}

            {/* <div className="relative">
              <button
                onClick={() => toggleDropdown("print")}
                className="flex items-center gap-1 hover:text-purple-900 transition"
              >
                Spausdinti{" "}
                {openDropdown === "print" ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
              {openDropdown === "print" && (
                <div className="absolute bg-white border mt-2 rounded shadow-lg w-52 text-sm z-50">
                  <Link
                    to="/spauzdinti/spalvinimo-lapai"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Spalvinimo lapai
                  </Link>
                  <Link
                    to="/spausdinti/raides-skaiciai"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Raidės ir skaičiai
                  </Link>
                  <Link
                    to="/spausdinti/uzduoteles"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Užduotėlės
                  </Link>
                  <Link
                    to="/spausdinti/atvirukai"
                    className="block px-4 py-2 hover:bg-purple-100"
                  >
                    Atvirukai
                  </Link>
                </div>
              )}
            </div> */}

            <Link to="/apie-mus" className="hover:text-purple-900 transition">
              Apie mus
            </Link>
            <Link to="/kontaktai" className="hover:text-purple-900 transition">
              Kontaktai
            </Link>
            <Link
              to="/privatumo-politika"
              className="hover:text-purple-900 transition"
            >
              Privatumas
            </Link>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="text-purple-700"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMobileOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-purple-600 font-semibold">
          <Link to="/" className="block hover:text-purple-900">
            Pagrindinis
          </Link>
          {/* <button
            onClick={() => toggleDropdown("games")}
            className="flex items-center justify-between w-full"
          >
            <span>Žaidimai</span>
            {openDropdown === "games" ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button> */}
          {/* {openDropdown === "games" && (
            <div className="pl-4 text-sm space-y-1">
              <Link
                to="/zaidimai/matematika"
                className="block hover:text-purple-900"
              >
                Matematika
              </Link>
              <Link
                to="/zaidimai/gramatika"
                className="block hover:text-purple-900"
              >
                Gramatika
              </Link>
              <Link
                to="/zaidimai/zodziai"
                className="block hover:text-purple-900"
              >
                Žodžiai
              </Link>
              <Link
                to="/zaidimai/paveiksliukai"
                className="block hover:text-purple-900"
              >
                Paveikslėliai
              </Link>
            </div>
          )}

          <button
            onClick={() => toggleDropdown("print")}
            className="flex items-center justify-between w-full"
          >
            <span>Spausdinti</span>
            {openDropdown === "print" ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
          {openDropdown === "print" && (
            <div className="pl-4 text-sm space-y-1">
              <Link
                to="/spauzdinti/spalvinimo-lapai"
                className="block hover:text-purple-900"
              >
                Spalvinimo 22222222
              </Link>
              <Link
                to="/spausdinti/raides-skaiciai"
                className="block hover:text-purple-900"
              >
                Raidės ir skaičiai
              </Link>
              <Link
                to="/spausdinti/uzduoteles"
                className="block hover:text-purple-900"
              >
                Užduotėlės
              </Link>
              <Link
                to="/spausdinti/atvirukai"
                className="block hover:text-purple-900"
              >
                Atvirukai
              </Link>
            </div>
          )} */}

          <Link to="/apie-mus" className="block hover:text-purple-900">
            Apie mus
          </Link>
          <Link
            to="/privatumo-politika"
            className="block hover:text-purple-900"
          >
            Privatumo politika
          </Link>
          <Link to="/kontaktai" className="block hover:text-purple-900">
            Kontaktai
          </Link>
        </div>
      )}
    </header>
  );
}
