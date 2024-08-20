import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl, FormHelperText } from "@mui/material";

export const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998-");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
    if (value.length < 4) {
      setNameError("It is not a name");
    } else {
      setNameError("");
    }
  };

  const handlePhoneChange = (event) => {
    const value = event.target.value;
    setPhone(value);

    if (value.startsWith("+998-")) {
      const phoneDigits = value.slice(5).replace(/-/g, "");

      if (phoneDigits.length !== 9) {
        setPhoneError("It is not Uzbekistan Phone number");
      } else {
        const phoneRegex = /^\d{9}$/;
        if (!phoneRegex.test(phoneDigits)) {
          setPhoneError("Phone number must be in +998-xx-xxx-xx-xx format.");
        } else {
          setPhoneError("");
        }
      }
    } else {
      setPhoneError("Phone number must start with +998-");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, phone });

    setName("");
    setPhone("+998-");

    setNameError("");
    setPhoneError("");
  };

  return (
    <div className="bg-contactBg bg-cover">
      <div className="container text-center py-12 md:py-24 lg:py-32">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-3">
          Need a consultation?
        </h2>
        <p className="text-white font-medium mb-20 text-lg sm:text-xl md:text-2xl">
          We will call you back
        </p>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="lg:flex items-center justify-evenly mb-10">
            <div className="max-w-[520px] mx-auto lg:w-[450px]">
              <FormControl fullWidth margin="normal" error={Boolean(nameError)}>
                <TextField
                  id="name"
                  value={name}
                  onChange={handleNameChange}
                  variant="outlined"
                  fullWidth
                  required
                  placeholder={!name ? "Enter your name" : ""}
                  InputProps={{
                    style: {
                      backgroundColor: "white",
                      outline: "none",
                      borderRadius: "12px",
                    },
                  }}
                />
                {nameError && <FormHelperText>{nameError}</FormHelperText>}
              </FormControl>
            </div>

            <div className="max-w-[520px] mx-auto lg:w-[450px]">
              <FormControl
                fullWidth
                margin="normal"
                error={Boolean(phoneError)}
              >
                <TextField
                  id="phone"
                  value={phone}
                  onChange={handlePhoneChange}
                  variant="outlined"
                  fullWidth
                  required
                  placeholder={!phone ? "+998-__-___-__-__" : ""}
                  InputProps={{
                    style: {
                      backgroundColor: "white",
                      outline: "none",
                      borderRadius: "12px",
                    },
                  }}
                />
                {phoneError && <FormHelperText>{phoneError}</FormHelperText>}
              </FormControl>
            </div>
          </div>

          <Button
            sx={{ padding: "10px 30px 10px 30px", borderRadius: "12px" }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
