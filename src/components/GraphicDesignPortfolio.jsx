// src/pages/GraphicDesignPortfolio.jsx
import React from "react";

const GraphicDesignPortfolio = () => {
  return (
    <div className="min-h-screen flex bg-[#f9f6ee] text-white px-6 md:px-16 lg:px-32 2xl:px-105">
      <div class="max-w-7xl my-20  mx-auto">
        <h1 className="text-3xl font-bold text-[#1e2749] mb-4">
          Graphic Design Portfolio
        </h1>
        <p className="text-gray-700 mb-6">
          This page showcases a collection of my graphic design work including:
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>Social media graphics</li>
          <li>Marketing banners</li>
          <li>Event posters</li>
          <li>Branding visuals and more</li>
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6">
          {/* Sample image slots */}
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/Ultrasound.jpg"
              alt="Design 1"
              className="rounded shadow"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/Men's Health Check.jpg"
              alt="Design 2"
              className="rounded shadow object-cover "
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/Pharmacy.jpg"
              alt="Design 2"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/Tuli2025.jpg"
              alt="Design 2"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/Our Services.jpg"
              alt="Design 2"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/Blood Letting CORAZON 2025.jpg"
              alt="Design 2"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/XRAYads.jpg"
              alt="Design 2"
              className="rounded shadow h-full"
            />
          </div>
          <div className="bg-white rounded-md shadow p-3 flex flex-col">
            <img
              src="/public/fluevaccine2024.jpg"
              alt="Design 2"
              className="rounded shadow h-full"
            />
          </div>
         
          {/* Add more as needed */}
        </div>
      </div>
    </div>
  );
};

export default GraphicDesignPortfolio;
