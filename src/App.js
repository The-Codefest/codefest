import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Box className="fontfamily">
      <GlobalAlert />
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Box>
  );
}

export default App;
