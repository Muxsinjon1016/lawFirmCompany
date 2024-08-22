import { Button } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";

export const Help = () => {
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCard(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-helpBg bg-cover">
      <div className="container py-36">
        <div
          ref={cardRef}
          className={`backdrop-blur-sm mx-auto border-2 rounded-20 xl:flex items-center justify-between p-7 lg:py-12 lg:px-14 w-[95%] ml-auto transform transition-transform duration-700 ${
            showCard
              ? "translate-y-0 opacity-100"
              : "translate-y-full opacity-0"
          }`}
        >
          <div>
            <h2 className="text-white md:text-2xl text-xs sm:text-xl xl:text-4xl">
              WE KNOW THE LAW- <br />
            </h2>
            <p className="text-white sm:text-3xl md:text-4xl font-bold text-lg xl:text-6xl mt-1 ms:mt-2 mb-10">
              WE WILL FIND A SOLUTION
            </p>
          </div>
          <div className="xl:mt-56 text-center">
            <Button
              sx={{
                padding: "10px 30px",
                fontSize: {
                  sm: "15px",
                  md: "20px",
                },
                borderRadius: "12px",
                fontWeight: "bold",
                marginX: "auto",
              }}
              variant="contained"
            >
              <a
                target="_blank"
                href="https://t.me/Muxsinjon_Maxsudovich"
                rel="noopener noreferrer"
              >
                Leave a request
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
