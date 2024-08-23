import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "300px",
    sm: "450px",
    md: "500px",
    lg: "750px",
  },
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "12px",
  padding: "10px 20px",
};

export const About = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div>
        <div className="pt-[150px] py-28 xl:py-44 bg-no-repeat bg-cover bg-aboutHero">
          <div className="container">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl lg:mb-5 lg:mt-2 -mt-10 md:mb-2 pb-5 font-semibold text-center text-white">
              About our company
            </h1>
            <div className="pb-2">
              <h3 className="text-white mb-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-8 md:mb-5">
                About [Law Firm Name]
              </h3>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl md:mb-5 backdrop-blur-[2px] lg:backdrop-blur-md py-2 px-4 rounded-20">
                <span className="font-bold">•</span> Welcome to [Law Firm Name],
                where legal expertise meets personalized service. Our firm has
                been serving clients with dedication and integrity for [number
                of years] years, offering a full range of legal services to
                individuals, businesses, and organizations.
              </p>
            </div>
          </div>
        </div>
        <hr className="py-[2px] bg-gradient-to-r from-blue-700 via-white to-red-600 animate-gradient-x" />
        <div className="py-28 xl:py-44 bg-no-repeat bg-cover bg-aboutBg2">
          <div className="container">
            <div className="pb-2">
              <h3 className="text-white mb-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-8 md:mb-5">
                Our Mission
              </h3>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl md:mb-5 backdrop-blur-[2px] lg:backdrop-blur-md py-2 px-4 rounded-20">
                <span className="font-bold">•</span> At [Law Firm Name], our
                mission is to provide exceptional legal representation with a
                focus on client success. We believe in a client-first approach,
                ensuring that every case is handled with the utmost care,
                attention to detail, and strategic planning.
              </p>
            </div>
          </div>
        </div>
        <hr className="py-[2px] bg-gradient-to-r from-blue-700 via-white to-red-600 animate-gradient-x" />
        <div className="py-28 xl:py-44  bg-no-repeat bg-cover bg-aboutBg3">
          <div className="container">
            <div className="pb-2">
              <h3 className="text-white mb-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-8 md:mb-5">
                Areas of Practice
              </h3>
              <p className="text-white text-xs sm:text-xl lg:text-3xl lg:mb-5 lg:mt-8 mb-1">
                We specialize in a diverse array of legal areas, including but
                not limited to:
              </p>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl md:mb-5 backdrop-blur-[4px] py-2 px-4 rounded-20">
                <b>- Corporate Law:</b> Providing comprehensive legal support
                for businesses, from startups to established corporations.
                <br />
                <b>- Family Law:</b> Navigating sensitive matters with
                compassion, including divorce, child custody, and adoption.
                <br />
                <b>- Intellectual Property:</b> Protecting your innovations and
                creative works with thorough and experienced counsel.
                <br />
                <b>- Litigation:</b> Representing clients in all forms of
                dispute resolution, including trials, arbitration, and
                mediation.
                <br />
                <b>- Real Estate Law:</b> Offering expertise in transactions,
                disputes, and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
        <hr className="py-[2px] bg-gradient-to-r from-blue-700 via-white to-red-600 animate-gradient-x" />
        <div className="py-28 xl:py-44 bg-no-repeat bg-cover bg-aboutBg4">
          <div className="container">
            <div className="pb-2">
              <h3 className="text-white mb-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-8 md:mb-5">
                Our Team
              </h3>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl md:mb-5 backdrop-blur-[1px] py-2 px-4 rounded-20">
                <span className="font-bold">•</span> Our team is composed of
                highly skilled attorneys, each with a deep understanding of
                their respective practice areas. With decades of combined
                experience, our lawyers are committed to achieving the best
                outcomes for our clients. We pride ourselves on our
                collaborative approach, working together to tackle complex legal
                challenges.
              </p>
            </div>
          </div>
        </div>
        <hr className="py-[2px] bg-gradient-to-r from-blue-700 via-white to-red-600 animate-gradient-x" />
        <div className="py-28 xl:py-44 bg-no-repeat bg-whi bg-cover md:bg-aboutBg5">
          <div className="container">
            <div className="pb-2">
              <h3 className="md:text-white mb-5 -mt-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-8 md:mb-5">
                Why Choose Us?
              </h3>
              <p className="md:text-white text-xs sm:text-xl lg:text-3xl lg:mb-5 lg:mt-8 mb-1">
                What sets [Law Firm Name] apart is our unwavering commitment to
                excellence. We are known for:
              </p>
              <p className="md:text-white text-sm sm:text-lg md:text-xl lg:text-2xl md:mb-5 backdrop-blur-[4px] py-2 px-4 rounded-20">
                <b>- Personalized Service:</b> We take the time to understand
                each client’s unique needs and tailor our services accordingly.
                <br />
                <b>- Proven Track Record:</b> Our firm has a history of
                successful case outcomes and satisfied clients.
                <br />
                <b>- Innovative Solutions:</b> We stay ahead of the curve, using
                the latest legal technologies and strategies to benefit our
                clients.
                <br />
                <b>- Community Involvement:</b> We believe in giving back to the
                community and are actively involved in [mention any community
                service or pro bono work].
              </p>
            </div>
          </div>
        </div>
        <hr className="py-[2px] bg-gradient-to-r from-blue-700 via-white to-red-600 animate-gradient-x" />
        <div className="py-28 xl:py-44 bg-no-repeat bg-cover bg-aboutBg6">
          <div className="container">
            <div className="pb-2">
              <h3 className="text-white mb-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-8 md:mb-5">
                Our Location
              </h3>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl md:mb-5 backdrop-blur-[1px] py-2 px-4 rounded-20">
                <span className="font-bold">•</span> Located in [City, State],
                [Law Firm Name] is proud to serve clients throughout
                [region/country]. Whether you need legal assistance locally or
                internationally, we have the resources and expertise to help.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Button
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 15,
                padding: "10px 30px",
                backgroundColor: "blue",
                borderRadius: "12px",
              }}
              onClick={handleOpen}
            >
              See on map
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Google Maps
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    height: "400px",
                    mt: 2,
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.338018548438!2d-122.41824318468197!3d37.77575997975861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b4b16b83%3A0x9c4ad01e5e7a1a09!2sGoogleplex!5e0!3m2!1sen!2sus!4v1632781159354!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                  />
                </Box>
              </Box>
            </Modal>
          </div>
        </div>
        <hr className="py-[2px] bg-gradient-to-r from-blue-700 via-white to-red-600 animate-gradient-x" />
        <div className="py-28 xl:py-44 bg-no-repeat bg-cover bg-aboutHero">
          <div className="container">
            <div className="pb-2">
              <h3 className="text-white mb-1 text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl xl:mb-8 md:mb-5">
                Contact Us
              </h3>
              <p className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl md:mb-5 backdrop-blur-[2px] lg:backdrop-blur-md py-2 px-4 rounded-20">
                <span className="font-bold">•</span> If you’re seeking legal
                advice or representation, don’t hesitate to contact us. Our team
                is here to provide the guidance and support you need. Reach out
                today to schedule a consultation and learn how we can assist
                you.
              </p>
            </div>
          </div>
          <div className="text-center sm:mt-10">
            <a
              target="_blank"
              className="text-center text-white bg-blue-700 lg:py-4 lg:px-20 lg:text-3xl font-medium sm:text-xl py-2 px-10 rounded-12"
              href="https://t.me/Muxsinjon_Maxsudovich"
            >
              Leave a message
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
