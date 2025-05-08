import React from "react";

function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer class="bg-[#1e2749] text-white">
      <div class="mx-auto px-10 py-4 flex justify-center items-center">
        <div class="text-center md:text-left">
          <p>&copy; {year} Dionisio Miñano Jr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
