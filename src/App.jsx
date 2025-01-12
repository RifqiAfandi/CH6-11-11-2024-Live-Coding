import { useState } from "react";
import { Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
export default App;
