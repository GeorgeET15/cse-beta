import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery"; // Import the Gallery component
import Drive from "./components/Drive";
import Folder from "./components/Folder";
import { projectFirestore } from "./firebase/config";

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/drive" element={<Drive database={projectFirestore} />} />
        <Route
          path="/folder/:id"
          element={<Folder database={projectFirestore} />}
        />
      </Routes>
    </Box>
  );
};

export default App;
