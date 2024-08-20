import React from "react";
import { Banner } from "./components/banner";
import { Help } from "./components/help";
import { HowCanHelp } from "./components/howCanHelp";
import { Brands } from "./components/brands";
import { PiHandshakeFill } from "react-icons/pi";
import { Contact } from "./components/contact";

export const Home = () => {
  return (
    <div className="mt-[50px]">
      <Banner />
      <Help />
      <HowCanHelp />
      <div className="container py-10">
        <h2 className="text-3xl sm:text-6xl md:text-7xl flex gap-10 font-semibold mb-2">
          Our partners <PiHandshakeFill />
        </h2>
        <Brands />
      </div>
      <Contact />
    </div>
  );
};

export default Home;
