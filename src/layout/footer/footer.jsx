import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="bg-[#09101A]">
        <div className="pt-20 pb-10 container">
          <div>
            <ul className="flex flex-wrap justify-center">
              <li className="w-[120px] sm:w-[150px] md:w-[190px] text-center">
                <img
                  className="w-[45px] mx-auto sm:w-[65px] mb-4 h-auto"
                  src="logo.png"
                  alt="logo"
                />
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
              </li>
              <li className="w-[120px] sm:w-[150px] md:w-[190px] text-center">
                <h4 className="text-white mb-4 text-xl font-medium">Title</h4>
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
              </li>
              <li className="w-[120px] sm:w-[150px] md:w-[190px] text-center">
                <h4 className="text-white mb-4 text-xl font-medium">Title</h4>
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
              </li>
              <li className="w-[120px] sm:w-[150px] md:w-[190px] text-center">
                <h4 className="text-white mb-4 text-xl font-medium">Title</h4>
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
                <p className="text-white mb-2">something</p>
              </li>
            </ul>
            <hr className="mt-20 mb-4" />
            <div className="flex items-center justify-between">
              <p className="text-gray-200 text-[7px] sm:text-sm md:text-lg">
                © 2024 MuxsinjonMaxsudovich.uz. All rights reserved.
              </p>
              <a
                className="text-white text-[7px] sm:text-sm md:text-lg"
                target="_blank"
                href="https://t.me/Muxsinjon_Maxsudovich"
              >
                Developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
