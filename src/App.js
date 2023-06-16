import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <Box className="fontfamily">
      {/* <GlobalAlert /> */}
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Box>
  );
}

export default App;
