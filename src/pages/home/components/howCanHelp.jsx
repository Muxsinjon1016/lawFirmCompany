import React, { useState, useEffect, useRef } from "react";

export const HowCanHelp = () => {
  const [showCards, setShowCards] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCards(true);
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the cards container is visible
    );

    if (cardsRef.current) {
      observer.observe(cardsRef.current);
    }

    return () => {
      if (cardsRef.current) {
        observer.unobserve(cardsRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-howCanHelp bg-cover">
      <div className="container py-10 sm:py-16 md:py-20">
        <h2 className="text-white font-bold text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:mb-14 mb-7 sm:mb-10 uppercase">
          How can we help?
        </h2>
        <div
          ref={cardsRef}
          className={`flex items-center justify-evenly flex-wrap transition-transform duration-700 ${
            showCards
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          {/* Card 1 */}
          <div className="py-2 sm:py-4 sm:px-6 px-4 w-[140px] sm:w-[170px] lg:w-[230px] xl:w-[270px] h-[220px] sm:h-[270px] lg:h-[330px] xl:h-[370px] backdrop-blur-[3px] mb-4 border-2 rounded-20 border-gray-200">
            <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl text-center mb-3 text-white font-semibold">
              DISPUTE RESOLUTION
            </h3>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Litigation and arbitration practice
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Bankruptcy
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Protection of business reputation Criminal law practice
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Criminal law practice
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white">
              • Appeal to the European Court of Human Rights
            </p>
          </div>

          {/* Repeat similar structure for the other cards */}
          {/* Card 2 */}
          <div className="py-2 sm:py-4 sm:px-6 px-4 w-[140px] sm:w-[170px] lg:w-[230px] xl:w-[270px] h-[220px] sm:h-[270px] lg:h-[330px] xl:h-[370px] backdrop-blur-[3px] mb-4 border-2 rounded-20 border-gray-200">
            <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl text-center mb-3 text-white font-semibold">
              REGULATORY ISSUES
            </h3>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Tax practice
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Interaction with regulatory authorities
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Antitrust law
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Customs law
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white">
              • Business protection
            </p>
          </div>

          {/* Card 3 */}
          <div className="py-2 sm:py-4 sm:px-6 px-4 w-[140px] sm:w-[170px] lg:w-[230px] xl:w-[270px] h-[220px] sm:h-[270px] lg:h-[330px] xl:h-[370px] backdrop-blur-[3px] mb-4 border-2 rounded-20 border-gray-200">
            <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl text-center mb-3 text-white font-semibold">
              TRANSACTIONS AND FINANCING
            </h3>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Real estate and construction
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Corporate Law, Mergers and Acquisitions
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Banking and financial law
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Customs law
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white">
              • Investment projects, securities
            </p>
          </div>

          {/* Card 4 */}
          <div className="py-2 sm:py-4 sm:px-6 px-4 w-[140px] sm:w-[170px] lg:w-[230px] xl:w-[270px] h-[220px] sm:h-[270px] lg:h-[330px] xl:h-[370px] backdrop-blur-[3px] mb-4 border-2 rounded-20 border-gray-200">
            <h3 className="text-xs sm:text-sm lg:text-lg xl:text-xl text-center mb-3 text-white font-semibold">
              FOR PRIVATE CLIENTS
            </h3>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Civil disputes
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Family law
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Inheritance
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white mb-2">
              • Bankruptcy
            </p>
            <p className="text-[7px] sm:text-[10px] lg:text-sm xl:text-base text-white">
              • Defense in criminal cases
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowCanHelp;
