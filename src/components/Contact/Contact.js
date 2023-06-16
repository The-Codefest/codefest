import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { APIS } from "../../utils/services";
import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import Banner from "../../assets/antique.jpg";
import { Footer } from "../Footer/footer";

const ContactUsPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await APIS.post("/contact", formData);

      if (response.status === 200) {
        // Form submission successful
        // Reset the form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        console.log("Form submitted successfully");
      } else {
        // Form submission failed
        const responseData = await response.json();
        console.error("Form submission failed:", responseData.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  const formFields = [
    { label: "Name", name: "name", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Message", name: "message", type: "textarea" },
  ];

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar component="nav" sx={{ bgcolor: "#fff", color: "#000" }}>
          <Toolbar variant="dense">
            <Typography
              variant="h6"
              color="inherit"
              component="div"
              sx={{
                fontWeight: 600,
                cursor: "pointer",
              }}
              onClick={handleHomeClick}
            >
              BOOKLY
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ position: "relative", height: "100vh" }}>
        <img src={Banner} alt="" style={{ width: "100%", height: "60vh" }} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "60%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ zIndex: 1 }}>
            <Typography
              variant="h2"
              color="textPrimary"
              fontWeight={600}
              align="center"
              sx={{ color: "white", mb: 2 }}
            >
              Get In Touch
            </Typography>

            <Typography align="center" sx={{ color: "white", mt: 2 }}>
              Discover academic journals, articles, & books on one seamless
              platform
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            textAlign: "center",
            boxShadow: "0px 6px 5px 2px rgba(199,187,199,1)",
            borderRadius: "10px",
            width: "50%",
            mx: "auto",
            mt: "-10%",
            backgroundColor: "white",
          }}
        >
          <form onSubmit={handleSubmit}>
            {formFields.map((field) => (
              <TextField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type === "textarea" ? "text" : field.type}
                variant="outlined"
                value={formData[field.name]}
                onChange={handleChange}
                fullWidth
                margin="normal"
                multiline={field.type === "textarea"}
                rows={field.type === "textarea" ? 4 : undefined}
              />
            ))}
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ContactUsPage;
