import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const AccordionFAQ = () => {
  return (
    <div className="container mb-[50px]">
      <h2 className="text-white text-2xl sm:text-4xl md:text-6xl md:my-10 text-center my-4">
        FAQ section
      </h2>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            What types of legal services do you provide?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            We specialize in a wide range of legal services including corporate
            law, family law, criminal defense, real estate law, and personal
            injury cases. Our team is equipped to handle both complex litigation
            and routine legal matters with the highest level of professionalism.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            How do I schedule a consultation with your firm?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            You can schedule a consultation by contacting us through our
            website's contact form, calling our office, or emailing us directly.
            We will respond promptly to set up a meeting at a time that is
            convenient for you.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            What should I bring to my initial consultation?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            For your initial consultation, it’s helpful to bring any relevant
            documents related to your case, such as contracts, correspondence,
            or legal notices. This will allow us to better understand your
            situation and provide more accurate advice.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            How much do your services cost?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            Our fees vary depending on the type and complexity of the case. We
            offer transparent pricing and will discuss our rates during the
            initial consultation. In some cases, we may offer flat fees or
            payment plans. For personal injury cases, we often work on a
            contingency fee basis, meaning you only pay if we win your case.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            Do you offer free consultations?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            Yes, we offer a free initial consultation for many types of cases,
            including personal injury and criminal defense matters. This allows
            you to discuss your legal issue with us without any financial
            obligation.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            How long will my case take?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            The duration of a case can vary widely depending on its complexity,
            the court’s schedule, and other factors. During your consultation,
            we will provide an estimated timeline based on our experience with
            similar cases.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            Will I have direct access to my attorney throughout my case?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            Yes, we believe in maintaining open communication with our clients.
            You will have direct access to your attorney and our legal team
            throughout your case, and we will keep you informed of any
            developments.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            What should I do if I’m facing a legal emergency?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            If you are facing a legal emergency, such as an arrest or immediate
            legal threat, contact us immediately. We offer emergency legal
            services and will prioritize urgent matters to provide you with the
            necessary legal support.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            Can you help me with legal matters outside of your jurisdiction?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            While we are licensed to practice law in [insert jurisdiction], we
            can assist with legal matters outside our jurisdiction through a
            network of trusted attorneys. We will help you find the right legal
            representation if your case requires out-of-state or international
            legal expertise.
          </p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b className="sm:text-lg md:text-2xl lg:text-3xl">
            Why should I choose your firm over others?
          </b>
        </AccordionSummary>
        <AccordionDetails>
          <p className="md:text-lg">
            Our firm is committed to providing personalized, effective, and
            compassionate legal representation. We have a proven track record of
            success and a dedicated team that will work tirelessly to achieve
            the best possible outcome for your case. We prioritize client
            satisfaction and strive to make the legal process as smooth as
            possible for you.
          </p>
        </AccordionDetails>
      </Accordion>
      <div className="text-center mt-5 md:mt-10">
        <button className="text-white text-lg py-3 px-4 bg-blue-800 rounded-12 w-[50%]">
          <a target="_blank" href="https://t.me/Muxsinjon_Maxsudovich">
            Contact now
          </a>
        </button>
      </div>
    </div>
  );
};

export default AccordionFAQ;
