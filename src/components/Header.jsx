import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
    `}
    >
      <div className="mx-auto px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white cursor-pointer">
          {/* Replace with your logo */}
          <span className={`${scrolled ? "text-[#1A2341]" : "text-white"}`}>
            DM
          </span>
        </div>

        {/* Hamburger Menu */}
        <div className="group space-y-1 cursor-pointer">
          <span
            className={`block h-0.5 transition-all duration-300
      ${scrolled ? "bg-[#1A2341]" : "bg-white"}
      w-7 group-hover:w-4
    `}
          ></span>
          <span
            className={`block h-0.5 mt-2 ml-3 group-hover:ml-0 transition-all duration-300
      ${scrolled ? "bg-[#1A2341]" : "bg-white"}
      w-4 group-hover:w-7
    `}
          ></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
