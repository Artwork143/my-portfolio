import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import AnimatedWrapper from "./AnimatedWrapper";

export default function About() {
  return (
    <div className="min-h-screen bg-[#1e2749] text-white px-6 md:px-16 lg:px-32 2xl:px-105">
      <AnimatedSection>
        <h1 className=" font-bold text-3xl text-white py-5">About Me</h1>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 gap-10 items-start py-10">
        <AnimatedWrapper direction="left">
          <img
            src="/Me.jpg"
            alt="Profile"
            className="rounded-full w-48 h-48 object-cover mb-6 border-2 border-white mx-auto"
          />

          <p className="text-md leading-relaxed text-center md:mx-20">
            I'm a Web Developer specializing in creating fast, responsive, and
            user-centric web applications. I build scalable solutions that not
            only look great but perform seamlessly across devices. I'm currently
            open to freelance opportunities where I can collaborate, innovate,
            and bring impactful ideas to life. Let's build something great
            together.
          </p>

          <p className="mt-4 text-sm text-gray-400 text-center">
            📍 Negros Occidental, Philippines
          </p>

          <div className="flex justify-center mt-5">
            <a
              href="/Miñano_Resume.pdf"
              download="Miñano_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 bg-blue-600 rounded-full text-sm border border-white/20 hover:bg-blue-800 cursor-pointer"
            >
              Download Resume
            </a>
          </div>
        </AnimatedWrapper>

        <AnimatedWrapper direction="right">
          <div>
            <h3 className="text-2xl font-bold">Education</h3>
            <p className="mt-1 font-bold">
              Northern Negros State College of Science & Technology
            </p>
            <p>Bachelor of Science in Information Technology</p>
            <p className="text-sm text-gray-400">2014 - 2018</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Experience</h3>
            <p className="font-bold">Lopez District Farmers Hospital Inc.</p>
            <p className="text-sm text-gray-400">
              IT Specialist | 2019 - to present
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Developed Hospital Website</li>
              <li>Created Graphic Designs for Advertisement</li>
              <li>Manage and Maintain IT infrastructure</li>
              <li>Provide technical support to employees</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold">Tech Stack</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {[
                "HTML",
                "CSS",
                "JavaScript",
                "ReactJS",
                "Tailwind CSS",
                "Laravel",
                "Blade",
                "PHP",
                "Mysql",
                "NodeJS",
                "ExpressJS",
                "MongoDB",
                "GitHub",
                "Figma",
                "Photoshop",
                "Premiere Pro",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedWrapper>
      </div>
    </div>
  );
}
