import React from 'react'

const Landing = () => {
    return (
      <section className="min-h-screen flex items-center bg-[#1A2341] text-white px-6 md:px-32">
        <div className="max-w-3xl">
          <p className="text-base text-gray-300 mb-2">Hi, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            Dionisio Miñano<span className="text-transparent">.</span>
          </h1>
          {/* <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6">
            I'm a Software Engineer at <span className="text-yellow-400">Clearlink.</span>
          </h2> */}
          <h2 className="text-xl md:text-2xl font-medium text-gray-400 mb-6">
            I'm a <span className="text-yellow-400">Freelance</span> Front-end Developer.
          </h2>
          <p className="text-gray-400 text-base leading-relaxed">
            I'm currently focused on expanding my experience<br />
            designing and developing high performing websites.
          </p>
        </div>
      </section>
    );
  };
  
  export default Landing;
  