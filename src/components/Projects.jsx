import React from "react";
import { useState } from "react";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "public/cdrrmoHome.png",
    "public/lodifhiWebsite.png",
    "public/AIDMAN.png",
  ];

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="min-h-screen flex bg-[#f9f6ee] text-white px-6 md:px-16 lg:px-32 2xl:px-105">
      <div class="max-w-7xl mx-auto">
        <h1 className=" font-bold text-3xl text-[#1e2749] py-5">Projects</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-15">
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="public/lodifhiWebsite.png"
              alt="Lodifhi Website"
              className="object-cover h-60 w-full mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                LODIFHI Website
              </h2>
              <p className="text-sm text-gray-600">
                A clean layout for a Private Hospital with a modern and
                responsive design.
              </p>
              <div className="my-2 text-xs text-gray-400 flex justify-between items-center">
                <div>
                  <ul className="flex flex-row gap-2">
                    <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                      React
                    </li>
                    <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                      Tailwind
                    </li>
                    <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                      Netlify
                    </li>
                  </ul>
                </div>
                <a
                  href="https://lodifhi.netlify.app"
                  target="_blank"
                  class="mt-2 hover:bg-[#1e2749] hover:text-white bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold transition  duration-300 ease-in-out"
                >
                  Visit Site ›
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md shadow p-3 group hover:-translate-y-1 transition">
            <div className="relative mb-4">
              <img
                src={images[0]}
                alt="Management System with DSS"
                className="object-cover h-60 w-full rounded transition group-hover:brightness-50"
              />
              <button
                onClick={() => setShowModal(true)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
              >
                <span className="text-white text-lg font-semibold bg-[#1e2749] px-4 py-2 rounded">
                  View Details
                </span>
              </button>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Management System with DSS
            </h2>
            <p className="text-sm text-gray-600">
              A College Thesis, Management system with decision support system
              for Escalante City Disaster Risk Reduction Management Office.
            </p>
            <div className="my-2">
              <ul className="flex flex-row gap-2 flex-wrap">
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  Laravel
                </li>
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  Blade
                </li>
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  Tailwind
                </li>
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  Mysql
                </li>
              </ul>
            </div>
          </div>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
              <div className="bg-white rounded-lg max-w-2xl w-full p-4 relative">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-4 bg-red-500 hover:bg-red-600 text-white text-xl font-bold w-6 h-6 pb-1 flex items-center justify-center rounded-sm"
                >
                  &times;
                </button>

                <img
                  src={images[currentIndex]}
                  alt={`Project image ${currentIndex + 1}`}
                  className="w-full rounded shadow mb-4 mt-5"
                />

                <div className="flex justify-between items-center">
                  <button
                    onClick={prevImage}
                    className="px-4 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
                  >
                    ‹ Previous
                  </button>
                  <button
                    onClick={nextImage}
                    className="px-4 py-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded"
                  >
                    Next ›
                  </button>
                </div>
              </div>
            </div>
          )}

          <div class="bg-white rounded-md shadow p-3 hover:-translate-y-1 transition">
            <img
              src="public/AIDMAN.png"
              alt="AIDMAN Management System"
              className="object-cover h-60 w-full mb-4"
            />
            <h2 class="text-xl font-semibold text-gray-800 mb-2">AIDMAN</h2>
            <p class="text-sm text-gray-600">
              A College Thesis, Management system of relief goods for faster and
              acurate distribution of goods to the residents.
            </p>

            <div class="my-2">
              <ul className="flex flex-row gap-2">
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  HTML
                </li>
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  PHP
                </li>
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  Bootstrap
                </li>
                <li className="px-3 py-1 bg-[#1e2749]/30 rounded-full text-[#1e2749] text-sm">
                  Mysql
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
