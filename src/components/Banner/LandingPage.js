import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import Banner from "../../assets/antique.jpg";
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
              Your Online Library
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
              Discover academic journals, articles, & books on one seamless
              platform
            </Typography>
          </Box>
        </Box>

        {/* info section */}
        <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-evenly"
            sx={{
              background: "white",
              border: "1px solid rgb(196, 204, 198)",
              width: "90%",
              boxShadow: "0px 6px 5px 2px rgba(199,187,199,1)",
              borderRadius: "20px",
            }}
          >
            {HomeData.map((items, index) => (
              <div
                key={items.id}
                style={{
                  padding: "15px",
                  flex: "1",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <Typography variant="h2" style={{ color: items.color }}>
                  {items.value}
                </Typography>
                <Typography
                  sx={{
                    color: "rgb(196, 204, 198)",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  {items.name}
                </Typography>
                {index !== HomeData.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      top: "calc(25% - 10px)",
                      right: "0",
                      height: "80px",
                      width: "2px",
                      backgroundColor: "rgb(137, 139, 143)",
                      content: "''",
                    }}
                  />
                )}
              </div>
            ))}
          </Box>
        </Box>

        {/* icons section */}
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

        {/* Discover Bookly */}
        <Box mt={15}>
          <Box>
            <Typography
              variant="h4"
              sx={{ color: "#54565A", fontWeight: 600, textAlign: "center" }}
            >
              Discover with Bookly
            </Typography>
            <Typography
              textAlign="center"
              sx={{ color: "#000", fontSize: "24px" }}
            >
              Browse our collection of Articles
            </Typography>
          </Box>
          <Box mt={15}>
            {/* Discover images */}
            <Box m={5}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <Typography variant="body1" sx={{ color: "#EDAA00" }}>
                    Zoology
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="600">
                    Ant colonies Maintain Social Homeostasis in the Face of
                    Decreased Density
                  </Typography>
                  <Typography variant="body2" sx={{ width: "80%" }}>
                    Interactions lie at the heart of social organization,
                    particularly in ant societies. Interaction rates are
                    presumed to increase with density, but there is little
                    empirical evidence for this. We manipulated ...
                  </Typography>
                </div>
                <img
                  src={Ant}
                  alt=""
                  style={{ borderRadius: "10px", width: "25%" }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <div style={{ width: "25%", marginRight: "25px" }}>
                  <img
                    src={Art}
                    alt=""
                    style={{ borderRadius: "10px", width: "100%" }}
                  />
                </div>
                <div>
                  <Typography variant="body1" sx={{ color: "#EDAA00" }}>
                    Psychology
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="600">
                    Colors: The emotions and impressions they evoke
                  </Typography>
                  <Typography variant="body2" sx={{ width: "80%" }}>
                    In the words of Oscar Wilde, "Mere color can speak to the
                    soul in a thousand different ways." I too believe that
                    colors are an inseparable aspect of every individual's life
                    and play an essential role ...
                  </Typography>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "50px",
                }}
              >
                <div>
                  <Typography variant="body1" sx={{ color: "#EDAA00" }}>
                    Science
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="600">
                    Planets Orbiting Other Stars: The search for
                    extra-terrestrial life
                  </Typography>
                  <Typography variant="body2" sx={{ width: "80%" }}>
                    Since the Nobel-prize-winning discovery of a planet orbiting
                    a sun-like star, the field of extrasolar planets is
                    undergoing a true revolution. Thousands of planets have been
                    found, of which some may be ...
                  </Typography>
                </div>
                <div style={{ width: "25%", marginLeft: "25px" }}>
                  <img
                    src={Orbit}
                    alt=""
                    style={{ borderRadius: "10px", width: "100%" }}
                  />
                </div>
              </div>
            </Box>
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
            >
              <Typography
                variant="h4"
                sx={{ color: "#54565A", fontWeight: 600, textAlign: "center" }}
              >
                What can you find on Bookly?
              </Typography>
              <Typography
                sx={{
                  color: "#54565A",
                  width: "80%",
                  textAlign: "center",
                  mb: 3,
                }}
              >
                Bookly is an online library making academic research affordable
                and easy to discover.Enrich your research and explore millions
                of quality academic journals, articles, e-books and more all on
                one seamless platform. Trusted by students, researchers, and
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
        <Footer/>
      </Box>
    </div>
  );
};

export default LandingPage;
