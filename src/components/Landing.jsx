import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Landing = () => {
  return (
    <section className="min-h-screen flex items-center bg-[#1A2341] text-white px-6 md:px-16 lg:px-32 2xl:px-105">
      <div className="max-w-3xl">
        <p className="text-base text-white mb-2">Hi, I'm</p>
        <h1 className="text-5xl md:text-6xl font-bold mb-2">
          Dionisio Miñano<span className="text-transparent">.</span>
        </h1>
        {/* <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6">
            I'm a Software Engineer at <span className="text-yellow-400">Clearlink.</span>
          </h2> */}
        <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6">
          I'm a <span className="text-yellow-400">Freelance</span> Web
          Developer.
        </h2>
        <p className="text-gray-400 text-base leading-relaxed">
          I'm currently focused on expanding my experience
          <br />
          designing and developing high performing websites.
        </p>

        <div className="flex flex-row gap-2">
          <div className="hover:inset-shadow-sm hover:inset-shadow-indigo-500 mt-5 w-auto px-3 h-auto transition duration-700 ease-in-out hover:bg-white hover:text-[#1A2341] border-2 border-white rounded-r-xl hover:rounded-full flex items-center justify-center group">
            <div
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-3xl cursor-pointer -translate-x-1 group-hover:translate-x-3 transition duration-300 ease-in-out"
            >
              Contact <span className="group-hover:invisible">&gt;</span>
            </div>
          </div>

          <div className="mt-5 w-10 h-10 bg-blue-900 hover:bg-white hover:text-[#1A2341] border-2 border-white rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:inset-shadow-sm hover:inset-shadow-indigo-500">
            <a
              href="https://www.facebook.com/dionisio.t.minano"
              target="_blank"
              className="text-4xl font-bold"
            >
              f
            </a>
          </div>

          <div className="mt-5 w-10 h-10 bg-blue-600 hover:bg-white hover:text-[#1A2341] border-2 border-white rounded-xl flex items-center justify-center transition duration-300 ease-in-out hover:inset-shadow-sm hover:inset-shadow-indigo-500">
            <a
              href="https://www.linkedin.com/in/dionisio-mi%C3%B1ano-96081227b"
              target="_blank"
              className="text-3xl font-bold"
            >
              in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
