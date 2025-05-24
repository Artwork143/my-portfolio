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

  const [activeSection, setActiveSection] = useState(null);

 useEffect(() => {
  const timeout = setTimeout(() => {
    const sections = ["home", "projects", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, 500); // wait for content to mount

  return () => clearTimeout(timeout);
}, []);


  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#1e2749]"
      }`}
    >
      <div className="mx-auto px-6 md:px-16 lg:px-32 2xl:px-105 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold cursor-pointer">
          <img
            src={scrolled ? "/DM.png" : "/DM2.png"}
            className="h-8 w-8 transition-all duration-300"
          ></img>
          {/* <span className={`${scrolled ? "text-[#1e2749]" : "text-white"}`}>DM</span> */}
        </div>
        {!isPortfolioPage && (
  <ul className={`hidden md:flex gap-8 text-lg font-semibold ${scrolled ? "text-[#1e2749]" : "text-white"} items-center`}>
    {["home", "projects", "about", "contact"].map((section) => (
      <li key={section}>
        <button
          onClick={() => handleNavClick(section)}
          className={`border-l-2 pl-2 transition duration-300 ease-in-out
            ${
              activeSection === section
                ? "text-blue-500 border-l-blue-500"
                : "border-transparent hover:text-blue-500 "
            }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      </li>
    ))}
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
    {["home", "projects", "about", "contact"].map((section) => (
      <li key={section} className="w-full">
        <button
          onClick={() => handleNavClick(section)}
          className={`block px-10 py-2 w-full text-right font-bold transition
            ${
              activeSection === section
                ? "bg-[#1e2749] text-white"
                : "hover:bg-[#1e2749] hover:text-white"
            }`}
        >
          {section.charAt(0).toUpperCase() + section.slice(1)}
        </button>
      </li>
    ))}
  </ul>
</nav>

    </motion.header>
  );
};

export default Header;
