import * as React from "react";
import Box from "@mui/material/Box";

const images = [
  { imgPath: "/basri.png", title: "Basri Baba" },
  { imgPath: "/centralBeton.png", title: "Cetral Beton" },
  { imgPath: "/elmakon.png", title: "Elmakon" },
  { imgPath: "/grandFarm.png", title: "Grand farm" },
  { imgPath: "/grundFos.png", title: "Grand Fos" },
  { imgPath: "/indefinne.webp", title: "Indefine" },
  { imgPath: "/mkDos.png", title: "MK DOS" },
  { imgPath: "/promxim.jfif", title: "Promxim" },
  { imgPath: "/basri.png", title: "Basri Baba" },
  { imgPath: "/centralBeton.png", title: "Cetral Beton" },
  { imgPath: "/elmakon.png", title: "Elmakon" },
  { imgPath: "/grandFarm.png", title: "Grand farm" },
  { imgPath: "/grundFos.png", title: "Grand Fos" },
  { imgPath: "/indefinne.webp", title: "Indefine" },
  { imgPath: "/mkDos.png", title: "MK DOS" },
  { imgPath: "/promxim.jfif", title: "Promxim" },
  { imgPath: "/basri.png", title: "Basri Baba" },
  { imgPath: "/centralBeton.png", title: "Cetral Beton" },
  { imgPath: "/elmakon.png", title: "Elmakon" },
  { imgPath: "/grandFarm.png", title: "Grand farm" },
  { imgPath: "/grundFos.png", title: "Grand Fos" },
  { imgPath: "/indefinne.webp", title: "Indefine" },
  { imgPath: "/mkDos.png", title: "MK DOS" },
  { imgPath: "/promxim.jfif", title: "Promxim" },
  { imgPath: "/basri.png", title: "Basri Baba" },
  { imgPath: "/centralBeton.png", title: "Cetral Beton" },
  { imgPath: "/elmakon.png", title: "Elmakon" },
  { imgPath: "/grandFarm.png", title: "Grand farm" },
  { imgPath: "/grundFos.png", title: "Grand Fos" },
  { imgPath: "/indefinne.webp", title: "Indefine" },
  { imgPath: "/mkDos.png", title: "MK DOS" },
  { imgPath: "/promxim.jfif", title: "Promxim" },
];

export const Brands = () => {
  const imageWidth = 120;
  const marginRight = 30;
  const totalImageWidth = imageWidth + marginRight;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        py: 5,
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          overflow: "hidden",
          padding: "16px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50px",
            height: "100%",
            background:
              "linear-gradient(to right, white, rgba(255, 255, 255, 0))",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "50px",
            height: "100%",
            background:
              "linear-gradient(to left, white, rgba(255, 255, 255, 0))",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "scroll 100s linear infinite",
            "@keyframes scroll": {
              "0%": { transform: "translateX(0)" },
              "100%": {
                transform: `translateX(-${totalImageWidth * images.length}px)`,
              },
            },
          }}
        >
          {[...images, ...images].map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: `${imageWidth}px`,
                height: "60px",
                marginRight: `${marginRight}px`,
              }}
            >
              <Box
                component="img"
                src={step.imgPath}
                alt={step.title}
                sx={{
                  width: "120px",
                  height: "60px",
                  objectFit: "cover",
                }}
              />
              <Box sx={{ textAlign: "center", mt: 1 }}>{step.title}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Brands;
