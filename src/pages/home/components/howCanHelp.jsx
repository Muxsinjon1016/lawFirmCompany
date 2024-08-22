import React, { useState, useEffect, useRef } from "react";

export const HowCanHelp = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardsRefs = useRef([]);

  useEffect(() => {
    const observers = cardsRefs.current.map((cardRef, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prevVisibleCards) => [...prevVisibleCards, index]);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (cardRef) {
        observer.observe(cardRef);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, index) => {
        if (cardsRefs.current[index]) {
          observer.unobserve(cardsRefs.current[index]);
        }
      });
    };
  }, []);

  return (
    <div className="bg-howCanHelp bg-cover">
      <div className="container py-10 sm:py-16 md:py-20">
        <h2 className="text-white font-bold text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:mb-14 mb-7 sm:mb-10 uppercase">
          How can we help?
        </h2>
        <div className="flex items-center justify-evenly flex-wrap">
          {[
            "DISPUTE RESOLUTION",
            "REGULATORY ISSUES",
            "TRANSACTIONS AND FINANCING",
            "FOR PRIVATE CLIENTS",
          ].map((title, index) => (
            <div
              key={index}
              ref={(el) => (cardsRefs.current[index] = el)}
              className={`py-2 sm:py-4 sm:px-6 px-4 w-[250px] sm:w-[270px] lg:w-[300px] xl:w-[270px] h-[270px] sm:h-[370px] lg:h-[400px] xl:h-[420px] backdrop-blur-[3px] mb-6 border-2 rounded-20 border-gray-200 transition-transform duration-700 ${
                visibleCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <h3 className="text-xl text-center mb-3 text-white font-semibold">
                {title}
              </h3>
              <p className="text-[12px] sm:text-[17px] lg:text-lg text-white mb-2">
                {/* Content based on title */}
                {index === 0 && (
                  <>
                    • Litigation and arbitration practice <br />
                    • Bankruptcy <br />
                    • Protection of business reputation <br />
                    • Criminal law practice <br />• Appeal to the European Court
                    of Human Rights
                  </>
                )}
                {index === 1 && (
                  <>
                    • Tax practice <br />
                    • Interaction with regulatory authorities <br />
                    • Antitrust law <br />
                    • Customs law <br />• Business protection
                  </>
                )}
                {index === 2 && (
                  <>
                    • Real estate and construction <br />
                    • Corporate Law, Mergers and Acquisitions <br />
                    • Banking and financial law <br />
                    • Customs law <br />• Investment projects, securities
                  </>
                )}
                {index === 3 && (
                  <>
                    • Civil disputes <br />
                    • Family law <br />
                    • Inheritance <br />
                    • Bankruptcy <br />• Defense in criminal cases
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowCanHelp;
