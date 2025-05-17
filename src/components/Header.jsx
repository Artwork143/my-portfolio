import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const Header = ({ onScrollTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const isPortfolioPage = location.pathname === "/graphic-design-portfolio";

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleNavClick = (section) => {
    onScrollTo[section]?.();
    setMenuOpen(false);
  };

  const handleBack = () => {
    window.location.href = "/";
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#1e2749]"
      }`}
    >
      <div className="mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold cursor-pointer">
          <img
            src={scrolled ? "/DM.png" : "/DM2.png"}
            className="h-8 w-8 transition-all duration-300"
          ></img>
          {/* <span className={`${scrolled ? "text-[#1e2749]" : "text-white"}`}>DM</span> */}
        </div>
        {!isPortfolioPage && (
          <ul className={`hidden md:flex gap-8 text-lg font-semibold ${scrolled ? "text-[#1e2749]" : "text-white"} items-center`}>
            <li>
              <button
                onClick={() => handleNavClick("home")}
                className="hover:text-blue-500 border-l-2 pl-2 border-transparent hover:border-l-blue-500 transition duration-300 ease-in-out"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("projects")}
                className="hover:text-blue-500 border-l-2 pl-2 border-transparent hover:border-l-blue-500 transition duration-300 ease-in-out"
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("about")}
                className="hover:text-blue-500 border-l-2 pl-2 border-transparent hover:border-l-blue-500 transition duration-300 ease-in-out"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavClick("contact")}
                className="hover:text-blue-500 border-l-2 pl-2 border-transparent hover:border-l-blue-500 transition duration-300 ease-in-out"
              >
                Contact
              </button>
            </li>
          </ul>
        )}
        {isPortfolioPage ? (
          <button onClick={handleBack} className="transition-all">
            <ArrowLeft
              size={28}
              className={`${scrolled ? "text-[#1e2749]" : "text-white"}`}
            />
          </button>
        ) : (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="transition-all md:hidden"
          >
            {menuOpen ? (
              <X
                size={28}
                className={`transition-all duration-300 ${
                  scrolled ? "text-[#1e2749]" : "text-white"
                }`}
              />
            ) : (
              <div className="space-y-1 group transition-all duration-300">
                <span
                  className={`block h-0.5 w-7 ${
                    scrolled ? "bg-[#1e2749]" : "bg-white"
                  } transition-all group-hover:w-4`}
                ></span>
                <span
                  className={`block h-0.5 w-4 ml-3 mt-2 ${
                    scrolled ? "bg-[#1e2749]" : "bg-white"
                  } transition-all group-hover:w-7 group-hover:ml-0`}
                ></span>
              </div>
            )}
          </button>
        )}
      </div>

      {/* Slide-down nav */}
      <nav
        className={`
          transition-all duration-300 ease-in-out transform
          ${
            menuOpen && !isPortfolioPage
              ? "translate-x-0 opacity-100 pointer-events-auto"
              : "-translate-x-full opacity-0 pointer-events-none"
          }
          absolute top-full right-0 w-full z-40
          ${scrolled ? "bg-gray-200" : "bg-white"} shadow-md pt-2 pb-4
        `}
      >
        <ul className="flex flex-col gap-3 text-[#1e2749] font-medium items-end">
          <li className="w-full hover:bg-[#1e2749] hover:text-white">
            <button
              onClick={() => handleNavClick("home")}
              className="block px-10 py-2 w-full text-right font-bold"
            >
              Home
            </button>
          </li>
          <li className="w-full hover:bg-[#1e2749] hover:text-white">
            <button
              onClick={() => handleNavClick("projects")}
              className="block px-10 py-2 w-full text-right font-bold"
            >
              Projects
            </button>
          </li>
          <li className="w-full hover:bg-[#1e2749] hover:text-white">
            <button
              onClick={() => handleNavClick("about")}
              className="block px-10 py-2 w-full text-right font-bold"
            >
              About
            </button>
          </li>
          <li className="w-full hover:bg-[#1e2749] hover:text-white">
            <button
              onClick={() => handleNavClick("contact")}
              className="block px-10 py-2 w-full text-right font-bold"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
