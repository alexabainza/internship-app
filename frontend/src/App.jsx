import { useState } from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/credentials/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FilterAhead from "./pages/FilterAhead";
import Landing from "./pages/credentials/Landing";
import Results from "./pages/results/Results";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme"; // Import your custom theme file

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/filter" element={<FilterAhead />}></Route>
            <Route path="/landing" element={<Landing />}></Route>
            <Route path="/results" element={<Results />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
