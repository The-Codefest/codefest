// import React, { useState, useRef, useEffect } from "react";
// import Navbar from "../TopNavBar/Navbar";
// import {
//   Box,
//   Button,
//   TextField,
//   Card,
//   Grid,
//   CardMedia,
//   CardContent,
//   Typography,
//   Link,
//   IconButton,
// } from "@mui/material";
// import { BiSearchAlt } from "react-icons/bi";
// import { bookData } from "../../constants/Books";
// import downloadIcon from "../../assets/download_icon.png";
// import { Footer } from "../Footer/footer";

// const cardTextStyle2 = {
//   fontSize: "12px",
//   fontWeight: 400,
//   py: 0.3,
//   color: "#667085",
// };

// const PAGE_SIZE = 18; // Number of cards per page

// const Library = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const contentRef = useRef(null); // Ref for the content container
//   const [filteredBookData, setFilteredBookData] = useState([]);
//   const [displayedBookData, setDisplayedBookData] = useState([]);

//   useEffect(() => {
//     // Set the displayed book data based on the current page and filtered book data
//     const startIndex = (currentPage - 1) * PAGE_SIZE;
//     const endIndex = startIndex + PAGE_SIZE;
//     const currentCards = searchTerm ? filteredBookData.slice(startIndex, endIndex) : bookData.slice(startIndex, endIndex);
//     setDisplayedBookData(currentCards);
//   }, [currentPage, filteredBookData, searchTerm]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     const formattedSearchTerm = searchTerm.trim().toLowerCase();
//     const filteredData = bookData.filter((book) => {
//       const formattedTitle = book.title.trim().toLowerCase();
//       const formattedAuthor = book.author.trim().toLowerCase();
//       return (
//         formattedTitle.includes(formattedSearchTerm) ||
//         formattedAuthor.includes(formattedSearchTerm)
//       );
//     });
//     setFilteredBookData(filteredData);
//     setCurrentPage(1);
//     contentRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     contentRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   // Calculate total number of pages
//   const totalPages = Math.ceil(displayedBookData.length / PAGE_SIZE);

//   // Get the cards to display on the current page
//   const startIndex = (currentPage - 1) * PAGE_SIZE;
//   const endIndex = startIndex + PAGE_SIZE;
//   const currentCards = filteredBookData.slice(startIndex, endIndex);

//   return (
//     <div>
//       <div ref={contentRef}>
//         <Navbar />
//         {/* Ref to the content container */}
//         <Box
//           mt={11}
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <form onSubmit={handleSearch}>
//             <TextField
//               variant="outlined"
//               placeholder="Search for your books"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{
//                 color: "black",
//                 width: "50vw",
//                 borderRadius: "5px",
//               }}
//               InputProps={{
//                 endAdornment: (
//                   <Button type="submit" onClick={handleSearch}>
//                     <BiSearchAlt style={{ color: "black" }} />
//                   </Button>
//                 ),
//               }}
//             />
//           </form>
//         </Box>
//         <Box sx={{ background: "#E8E9ED", mt: 5 }}>
//           <Grid container spacing={3} p={5}>
//             {currentCards.map((book) => (
//               <Grid item key={book.id} xs={8} sm={6} md={2} lg={2}>
//                 <Card sx={{ width: "100%", borderRadius: 2 }} elevation={0}>
//                   <CardMedia
//                     component="img"
//                     height={200}
//                     image={book.img}
//                     alt=""
//                   />
//                   <CardContent sx={{ height: 120 }}>
//                     <Typography
//                       variant="body1"
//                       nowrap
//                       title={book.title}
//                       component="div"
//                       sx={cardTextStyle2}
//                     >
//                       Title: {book.title}
//                     </Typography>
//                     <Typography
//                       variant="subtitle2"
//                       component="div"
//                       sx={cardTextStyle2}
//                     >
//                       Author: {book.author}
//                     </Typography>
//                     <Box
//                       sx={{ display: "flex", justifyContent: "space-between" }}
//                     >
//                       <Typography sx={cardTextStyle2}>Download Book</Typography>
//                       <IconButton sx={{ p: 0, m: 0 }}>
//                         <Link underline="none" target="_blank" rel="noopener">
//                           <img src={downloadIcon} alt="download icon" />
//                         </Link>
//                       </IconButton>
//                     </Box>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//       </div>
//       {/* Pagination */}
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
//         {Array.from({ length: totalPages }, (_, index) => (
//           <Button
//             key={index + 1}
//             variant={index + 1 === currentPage ? "contained" : "outlined"}
//             onClick={() => handlePageChange(index + 1)}
//           >
//             {index + 1}
//           </Button>
//         ))}
//       </Box>
//       <Footer />
//     </div>
//   );
// };

// export default Library;

import React, { useState, useRef, useEffect } from "react";
import Navbar from "../TopNavBar/Navbar";
import {
  Box,
  Button,
  TextField,
  Card,
  Grid,
  CardMedia,
  CardContent,
  Typography,
  Link,
  IconButton,
  Modal,
} from "@mui/material";
import { BiCloudUpload, BiSearchAlt } from "react-icons/bi";
import { bookData } from "../../constants/Books";
import downloadIcon from "../../assets/download_icon.png";
import { Footer } from "../Footer/footer";
import useModal from "../../hooks/useModal";
import UploadBook from "./UploadBook";

const cardTextStyle2 = {
  fontSize: "12px",
  fontWeight: 400,
  py: 0.3,
  color: "#667085",
};

const PAGE_SIZE = 18; // Number of cards per page

const Library = () => {
  const { open, handleOpen, handleClose } = useModal();

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const contentRef = useRef(null); // Ref for the content container
  const [filteredBookData, setFilteredBookData] = useState([]);
  const [displayedBookData, setDisplayedBookData] = useState([]);

  useEffect(() => {
    // Set the displayed book data based on the current page and filtered book data
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentCards = searchTerm
      ? filteredBookData.slice(startIndex, endIndex)
      : bookData.slice(startIndex, endIndex);
    setDisplayedBookData(currentCards);
  }, [currentPage, filteredBookData, searchTerm]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formattedSearchTerm = searchTerm.trim().toLowerCase();
    const filteredData = bookData.filter((book) => {
      const formattedTitle = book.title.trim().toLowerCase();
      const formattedAuthor = book.author.trim().toLowerCase();
      return (
        formattedTitle.includes(formattedSearchTerm) ||
        formattedAuthor.includes(formattedSearchTerm)
      );
    });
    setFilteredBookData(filteredData);
    setCurrentPage(1);
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    contentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate total number of pages
  const totalPages = Math.ceil(
    (searchTerm ? filteredBookData.length : bookData.length) / PAGE_SIZE
  );

  // Check if pagination should be shown
  const shouldShowPagination = totalPages > 1;

  return (
    <div>
      <div ref={contentRef}>
        <Navbar />
        {/* Ref to the content container */}
        <Box
          mt={11}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <form onSubmit={handleSearch}>
            <TextField
              variant="outlined"
              placeholder="Search for your books"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                color: "black",
                width: "50vw",
                borderRadius: "5px",
              }}
              InputProps={{
                endAdornment: (
                  <Button type="submit" onClick={handleSearch}>
                    <BiSearchAlt style={{ color: "black" }} />
                  </Button>
                ),
              }}
            />
          </form>
          <Button
            onClick={handleOpen}
            variant="contained"
            sx={{
              height: "45px",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            Upload Books
            <BiCloudUpload style={{ marginLeft: 5 }} />
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .MuiBackdrop-root": {
                zIndex: -1,
                backdropFilter: "blur(1px)",
                backgroundColor: "rgba(0, 0, 0, 0)",
              },
            }}
          >
            <UploadBook />
          </Modal>
        </Box>
        <Box sx={{ background: "#E8E9ED", mt: 5 }}>
          <Grid container spacing={3} p={5}>
            {displayedBookData.map((book) => (
              <Grid item key={book.id} xs={8} sm={6} md={2} lg={2}>
                <Card sx={{ width: "100%", borderRadius: 2 }} elevation={0}>
                  <CardMedia
                    component="img"
                    height={200}
                    image={book.img}
                    alt=""
                  />
                  <CardContent sx={{ height: 120 }}>
                    <Typography
                      variant="body1"
                      noWrap
                      title={book.title}
                      component="div"
                      sx={cardTextStyle2}
                    >
                      Title: {book.title}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      component="div"
                      sx={cardTextStyle2}
                    >
                      Author: {book.author}
                    </Typography>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={cardTextStyle2}>Download Book</Typography>
                      <IconButton sx={{ p: 0, m: 0 }}>
                        <Link underline="none" target="_blank" rel="noopener">
                          <img src={downloadIcon} alt="download icon" />
                        </Link>
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      {/* Pagination */}
      {shouldShowPagination && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              variant={index + 1 === currentPage ? "contained" : "outlined"}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </Box>
      )}
      <Footer />
    </div>
  );
};

export default Library;
