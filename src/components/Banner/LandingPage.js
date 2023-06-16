import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Banner from "../../assets/banner.jpg";
import { Box, Button, TextField, Typography } from "@mui/material";
import { HomeData } from "../../constants/Data";
import { IconData } from "../../constants/Items";
import Ant from "../../assets/AntColony.webp";
import Orbit from "../../assets/planet-orbits.webp";
import Art from "../../assets/art.webp";
import { Footer } from "../Footer/footer";

const LandingPage = () => {
  return (
    <div>
      <Box sx={{ position: "relative", height: "100vh" }}>
        <img src={Banner} alt="" style={{ width: "100%", height: "100vh" }} />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="h2"
              color="textPrimary"
              fontWeight={600}
              align="center"
              sx={{ color: "white", mb: 2 }}
            >
              Atendance Made Easy
            </Typography>
            <form>
              <TextField
                variant="outlined"
                placeholder="Search for your books"
                autoFocus={false}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "50vw",
                  borderRadius: "5px",
                }}
                InputProps={{
                  endAdornment: (
                    <Button>
                      <BiSearchAlt style={{ color: "black" }} />
                    </Button>
                  ),
                }}
              />
            </form>
            <Typography align="center" sx={{ color: "white", mt: 2 }}>
              Discover the varty of tracking students in lecture halls
            </Typography>
          </Box>
        </Box>

        {/* icons section */}
        <Box mt={5}>
          <Typography
            variant="h4"
            sx={{ color: "#54565A", fontWeight: 600, textAlign: "center" }}
          >
            Discover with Atendance
          </Typography>
          <Typography
            textAlign="center"
            sx={{ color: "#000", fontSize: "24px" }}
          >
            Browse our collection of Articles
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={5}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            sx={{ width: "90%" }}
          >
            {IconData.map((item) => (
              <Box
                key={item.id}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <img src={item.icon} alt={item.name} />
                <Typography sx={{ width: "80%", textAlign: "center" }}>
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* bees */}
        <Box mt={5}>
          <div style={{ display: "flex", background: "#fac700" }}>
            <Box
              padding="15px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              mt={5}
            >
              <Typography
                variant="h4"
                sx={{ color: "#54565A", fontWeight: 600, textAlign: "center" }}
              >
                What can you find on Atendance?
              </Typography>
              <Typography
                sx={{
                  color: "#54565A",
                  width: "80%",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                Atendees is an online atendance tracking system and an academic
                research site. Enrich your research and explore millions of
                quality academic journals, articles, e-books and more all on one
                seamless platform. Trusted by students, researchers, and
                professionals worldwide, we’re unlocking the true potential of
                your passion by empowering equal access to academic content.
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Sign up to newsletter"
                autoFocus={false}
                style={{
                  backgroundColor: "white",
                  color: "black",
                  width: "30vw",
                  borderRadius: "5px",
                }}
                InputProps={{
                  endAdornment: <Button>Send</Button>,
                }}
              />
            </Box>
          </div>
        </Box>
        <Footer />
      </Box>
    </div>
  );
};

export default LandingPage;
