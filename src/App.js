import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";

function App() {
  return (
    <Box className="fontfamily">
      {/* <GlobalAlert /> */}
      <Routes>
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
      </Routes>
    </Box>
  );
}

export default App;
