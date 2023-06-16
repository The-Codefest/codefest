import React from "react";
import FileUploader from "components/dashboard/FileUploader";
import { Box, Typography, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import { showAlert } from "store/features/alertSlice";
import { fileUploadApi } from "services/FileUploadAPI";
import axios from "axios";
import Scrap_Urls from "assets/SCRAP_URL/ScraperJobs.csv";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { useWindowWidth } from "hooks/useWindowWidth";
import { useState } from "react";
function ScrappedUrl() {
  const { windowWidth } = useWindowWidth();
  const dispatch = useDispatch();
const [loading, setLoading] = useState(false)
  const handleFileSelect = async (file) => {
    const formData = new FormData();
    formData.append("csv_file", file);

    try {
      setLoading(true)
      await fileUploadApi.FILEUPLOADAPI.post(
        "/dashboard/upload_url/",
        formData
      );
      setLoading(false)
      dispatch(showAlert(["success", "Upload successfull"]));
      
    } catch (error) {
      dispatch(showAlert(["error", "Upload error"]));
      setLoading(false)
    }
  };

  const handleDownload = async () => {
    try {
      const response = await axios({
        url: Scrap_Urls,
        method: "GET",
        responseType: "blob",
      });
      const url = URL.createObjectURL(response.data);
      const a = document.createElement("a");
      a.href = url;
      a.download = "ScraperJobs.csv";
      a.click();
    } catch (error) {}
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        height: "80vh",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ mb: 3 }}
        md={12}
        sm={12}
        lg={12}
        xs={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          variant="h4"
          sx={{
            color: "black",
            whiteSpace: "no-wrap",
            fontSize: windowWidth > 600 ? "none" : "1.5em",
          }}
          // display="flex"
        >
          Upload a CSV file
        </Typography>
        <Tooltip title="Download the sample file, edit and upload">
          <Typography
            // display="flex"
            textAlign="center"
          >
            
            <InfoOutlinedIcon sx={{ ml: 2, color: "#1F4EB4" }} />
          </Typography>
        </Tooltip>
      </Box>

      <FileUploader
        onFileSelect={handleFileSelect}
        handleDownload={handleDownload}
        loading={loading}
      />
    </Box>
  );
}

export default ScrappedUrl;
