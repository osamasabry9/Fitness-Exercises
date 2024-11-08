import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ExercisesDetail from "./pages/ExercisesDetail";

const App = () => {
  return (
    <Box width="400px" m="auto" sx={{ width: { xl: "1300x" } }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExercisesDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
