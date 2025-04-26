import React from 'react'

const Projects = () => {
  return (
    <section className="min-h-screen flex bg-[#f9f6ee] text-white px-6 md:px-16 lg:px-32 2xl:px-105">

        <div class="max-w-7xl mx-auto">
<h1 className=' font-bold text-3xl text-[#1A2341] py-5'>Projects</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-15">
 
          
    <div className="bg-white rounded-md shadow p-3 flex flex-col">
        <img 
          src="public/lodifhiWebsite.png" 
          alt="Lodifhi Website" 
          className="object-cover h-60 w-full mb-4"
        />
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">LODIFHI Website</h2>
          <p className="text-sm text-gray-600">A clean layout for a Private Hospital with a modern and responsive design.</p>
          <div className="mt-3 text-xs text-gray-400 flex justify-between">React · Tailwind · Netlify <a href="https://lodifhi.netlify.app" target="_blank" class=" mt-4 hover:bg-[#1A2341] hover:text-white bg-yellow-400 text-gray-900 px-4 py-2 rounded-md text-sm font-semibold transition  duration-300 ease-in-out">Visit Site ›</a></div>
        </div>
      </div>
    

      <div class="bg-white rounded-md shadow p-3 hover:-translate-y-1 transition">
      <img 
          src="public/cdrrmoHome.png" 
          alt="Management System with DSS" 
          className="object-cover h-60 w-full mb-4"
        />
        <h2 class="text-xl font-semibold text-gray-800 mb-2">Management System with DSS</h2>
        <p class="text-sm text-gray-600">A College Thesis, Management system with decision support system for Escalante City Disaster Risk Reduction Management Office.</p>
        <div class="mt-3 text-xs text-gray-400">Laravel · Blade · Tailwind · Mysql</div>
      </div>

      <div class="bg-white rounded-md shadow p-3 hover:-translate-y-1 transition">
      <img 
          src="public/AIDMAN.png" 
          alt="AIDMAN Management System" 
          className="object-cover h-60 w-full mb-4"
        />
        <h2 class="text-xl font-semibold text-gray-800 mb-2">AIDMAN</h2>
        <p class="text-sm text-gray-600">A College Thesis, Management system of relief goods for faster and acurate distribution of goods to the residents.</p>
        <div class="mt-3 text-xs text-gray-400">HTML · PHP · Bootstrap · Mysql</div>
      </div>

    </div>
  </div>

      </section>
  )
}

export default Projects