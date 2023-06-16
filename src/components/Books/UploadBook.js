import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress, Typography } from "@mui/material";
import { style } from "../../styles/modal";
import { APIS } from "../../utils/services";

const UploadBook = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    picture: null,
    bookFile: null,
  });

  const handleChange = (e) => {
    
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCoverImageChange = (e) => {
    console.log(e.target.files)
    console.log(e.target.files[0])
    setFormData({
      ...formData,
      picture: e.target.files[0],
    });
  };

  const handleBookFileChange = (e) => {
    console.log(e.target.files)
    console.log(e.target.files[0])
    setFormData({
      ...formData,
      bookFile: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const bookData = new FormData();
    console.log("bookData:", formData)
    bookData.append("title", formData.title);
    bookData.append("author", formData.author);
    bookData.append("isbn", formData.isbn);
    bookData.append("picture", formData.picture);
    bookData.append("bookFile", formData.bookFile);

    try {
      // Upload cover image
      const coverImageResponse = await APIS.post("/upload/cover", bookData);
      const coverImagePath = coverImageResponse.data;
      console.log(coverImagePath)

      // Upload book file
      const bookFileResponse = await APIS.post("/upload/file", bookData);
      const bookFilePath = bookFileResponse.data;
      console.log(bookFilePath)

      // Create the book entry
      const bookResponse = await APIS.post("/books", {
        // title: formData.title,
        // author: formData.author,
        // isbn: formData.isbn,
        // picture: bookData.picture,
        // filePath: bookData.bookFile,
        ...bookData
      });

      console.log(bookResponse.data);

      // Reset form data
      setFormData({
        title: "",
        author: "",
        isbn: "",
        picture: null,
        bookFile: null,
      });
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <Box sx={style}>
        <Typography varaiant="h2" fontWeight="600" textAlign="center">Upload Book to BOOKLY</Typography>
      <form onSubmit={handleSubmit} enctype="multipart/form-data">
        <Box display="flex" flexDirection="column" alignItems="center">
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            margin="normal"
          />
          <TextField
            label="ISBN"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
            margin="normal"
          />
          <input
            type="file"
            name="picture"
            accept="image/*"
            onChange={handleCoverImageChange}
            required
          />
          <input
            type="file"
            name="bookFile"
            accept=".pdf"
            onChange={handleBookFileChange}
            required
          />
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ mt: 2 }}
          >
            {loading ? (
              <CircularProgress size={24} color="primary" />
            ) : (
              "Upload Book"
            )}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UploadBook;
