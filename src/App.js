import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import Dashboard from "./components/Admin/Dashboar";

function App() {
  return (
    <Box className="fontfamily">
      {/* <GlobalAlert /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route path="" element={<Dashboard />} />
          {/*<Route path="reports" element={<Report />} />
            <Route path="users-management" element={<UsersManagement />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="upload-file" element={<ScrappedUrl />} /> */}
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
