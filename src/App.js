<<<<<<< Updated upstream
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
=======
import { Route, Routes } from 'react-router-dom';
import './App.css';
import StudentDashboard from './pages/StudentDashboard';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/dashboard' element={<StudentDashboard/>}/>
        </Routes>
    </div>
>>>>>>> Stashed changes
  );
}

export default App;
