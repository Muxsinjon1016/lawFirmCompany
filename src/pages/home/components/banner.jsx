import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const images = [
  {
    imgPath: "/slider1.jpg",
    title: "Sherzodbek Nosirov",
    description: "Advakat yordamchisi",
    workerImg: "bannerImg1.png",
  },
  {
    imgPath: "/slider2.jpg",
    title: "Together, we will achieve the results you deserve.",
    // description: "info about that worker",
  },
  {
    imgPath: "/slider3.jpg",
    title: "We are more than just a law firm; we are your legal partner.",
    // description: "info about that worker",
  },
];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const maxSteps = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maxSteps);
  };

  const handleBack = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxSteps) % maxSteps);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % maxSteps);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, maxSteps]);

  const handleMouseEnter = () => {
    setAutoPlay(false);
  };

  const handleMouseLeave = () => {
    setAutoPlay(true);
  };

  return (
    <Box
      sx={{ position: "relative", overflow: "hidden" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        sx={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((step, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              flexShrink: 0,
              width: "100%",
            }}
          >
            <Box
              component="img"
              src={step.imgPath}
              alt={`Slide ${index}`}
              sx={{
                width: "100%",
                height: {
                  xs: "220px",
                  sm: "320px",
                  md: "400px",
                  lg: "500px",
                  xl: "670px",
                },
                objectFit: "cover",
              }}
            />
            {step.workerImg && (
              <Box
                component="img"
                src={step.workerImg}
                alt="Worker"
                sx={{
                  position: "absolute",
                  bottom: "0",
                  right: {
                    xs: "0",
                    lg: "5%",
                  },
                  width: {
                    xs: "220px",
                    sm: "320px",
                    md: "400px",
                    lg: "500px",
                    xl: "650px",
                  },
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            )}
            <Box
              sx={{
                position: "absolute",
                bottom: "45%",
                left: "15%",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "5px",
                maxWidth: "80%",
              }}
            >
              <Box
                sx={{
                  fontWeight: "bold",
                  fontSize: {
                    xs: "15px",
                    sm: "27px",
                    md: "33px",
                    lg: "42px",
                    xl: "47px",
                  },
                }}
              >
                {step.title}
              </Box>
              <Box
                sx={{
                  marginTop: {
                    xs: "5px",
                    sm: "7px",
                  },
                  fontSize: {
                    xs: "7px",
                    sm: "15px",
                    md: "22px",
                    lg: "30px",
                    xl: "32px",
                  },
                }}
              >
                {step.description}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>

      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          left: "10px",
          padding: "5px",
          color: "black",
          backgroundColor: "gray",
          transform: "translateY(-50%)",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        onClick={handleBack}
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        sx={{
          position: "absolute",
          top: "50%",
          right: "10px",
          padding: "5px",
          color: "black",
          backgroundColor: "gray",
          transform: "translateY(-50%)",
          zIndex: 1,
          "&:hover": {
            backgroundColor: "black",
            color: "white",
          },
        }}
        onClick={handleNext}
      >
        <KeyboardArrowRight />
      </IconButton>
    </Box>
  );
};

export default Banner;
