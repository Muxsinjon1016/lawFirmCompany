import React from "react";

export const Hero = () => {
  return (
    <>
      <div className="bg-aboutHero bg-cover">
        <div className="container pt-[100px]">
          <h1 className="text-2xl pb-5 font-semibold text-center text-white">
            About our company
          </h1>
          <div className="pb-2">
            <h3 className="text-white mb-1 text-lg">About [Law Firm Name]</h3>
            <p className="text-white text-sm backdrop-blur-[2px] py-2 px-4 rounded-20">
              <span className="font-bold">•</span> Welcome to [Law Firm Name],
              where legal expertise meets personalized service. Our firm has
              been serving clients with dedication and integrity for [number of
              years] years, offering a full range of legal services to
              individuals, businesses, and organizations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
