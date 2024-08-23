import React from "react";
import { Contact } from "../home/components/contact";
import { AccordionFAQ } from "./components/accordion";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { MdOutlineArrowOutward } from "react-icons/md";

export const Services = () => {
  return (
    <>
      <div className="bg-servicesBg1">
        <div>
          <div className="container">
            <div className="pt-[100px] md:pt-[120px]">
              <h1 className="text-3xl sm:text-5xl sm:mb-7 md:text-7xl font-bold text-center mb-5 ">
                Our Services
              </h1>
              <p className=" text-center md:text-xl max-w-[750px] mx-auto text-xs sm:text-sm mb-10">
                At [Law Firm Name], we are committed to providing comprehensive
                legal services to meet your needs. Our team of experienced
                attorneys is dedicated to delivering top-notch representation
                across a wide range of practice areas.
              </p>
            </div>
            <ul className="flex items-center flex-wrap justify-evenly">
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Corporate Law
                </h3>
                <p className="text-white text-center text-sm">
                  We assist businesses of all sizes with legal matters including
                  company formation, mergers and acquisitions, contract
                  negotiations, and regulatory compliance. Our goal is to help
                  you navigate the complexities of corporate law and ensure your
                  business operates smoothly.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Family Law
                </h3>
                <p className="text-white text-center text-sm">
                  Our compassionate team provides legal support for
                  family-related matters such as divorce, child custody,
                  alimony, and prenuptial agreements. We work to resolve your
                  case with sensitivity and care, prioritizing the best
                  interests of you and your family.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Real Estate Law
                </h3>
                <p className="text-white text-center text-sm">
                  Whether you are buying, selling, or leasing property, our real
                  estate lawyers are here to guide you through every step. We
                  handle contract drafting, dispute resolution, zoning issues,
                  and more to protect your real estate investments.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Criminal Defense
                </h3>
                <p className="text-white text-center text-sm">
                  If you are facing criminal charges, our defense attorneys are
                  ready to provide aggressive representation. We handle cases
                  involving DUI, drug offenses, white-collar crimes, and more,
                  fighting to protect your rights and achieve the best possible
                  outcome.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>{" "}
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Personal Injury Law
                </h3>
                <p className="text-white text-center text-sm">
                  If you’ve been injured due to someone else’s negligence, our
                  personal injury lawyers are here to help you seek
                  compensation. We handle cases related to car accidents,
                  workplace injuries, medical malpractice, and more, ensuring
                  you receive the justice you deserve.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>{" "}
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Employment Law
                </h3>
                <p className="text-white text-center text-sm">
                  We represent both employers and employees in matters of
                  workplace disputes, wrongful termination, discrimination
                  claims, and employment contracts. Our goal is to ensure fair
                  treatment and legal compliance in the workplace.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Immigration Law
                </h3>
                <p className="text-white text-center text-sm">
                  Navigating the complexities of immigration can be daunting.
                  Our immigration attorneys provide guidance on visa
                  applications, green cards, citizenship, and deportation
                  defense, helping you achieve your immigration goals.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Estate Planning and Probate
                </h3>
                <p className="text-white text-center text-sm">
                  Secure your family’s future with our estate planning services.
                  We help draft wills, set up trusts, and navigate probate
                  proceedings to ensure your assets are protected and
                  distributed according to your wishes.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Intellectual Property Law
                </h3>
                <p className="text-white text-center text-sm">
                  Protect your ideas and creations with our intellectual
                  property services. We assist with patents, trademarks,
                  copyrights, and licensing agreements, helping you safeguard
                  your intellectual assets.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>{" "}
              <li className="w-[270px] h-[300px] bg-purple-800 relative border-2 rounded-12 mb-7 hover:scale-[1.1] transition-all duration-300 py-4 px-7">
                <h3 className="text-white text-xl sm:text-2xl font-semibold text-center mb-2">
                  Litigation and Dispute Resolution
                </h3>
                <p className="text-white text-center text-sm">
                  When legal disputes arise, our litigation team is prepared to
                  represent you in court or through alternative dispute
                  resolution methods like mediation and arbitration. We aim to
                  resolve your conflicts efficiently and effectively.
                </p>
                <a
                  className="absolute right-2 bottom-2"
                  href="https://t.me/Muxsinjon_Maxsudovich"
                >
                  <MdOutlineArrowOutward className="p-1 bg-green-500 rounded-full text-white w-7 lg:w-10 transition-all duration-300 hover:rotate-45 ml-auto h-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <AccordionFAQ />
        <Contact />
      </div>
    </>
  );
};

export default Services;
