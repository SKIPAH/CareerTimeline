import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DevPage from "./Pages/DevPage";
import FitnessPage from "./Pages/FitnessPage";
import EsportsPage from "./Pages/EsportsPage";
import Home from "./Pages/Home";
import "./styles.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="maincontainer">
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/esports" element={<EsportsPage />}></Route>
          <Route path="/dev" element={<DevPage />}></Route>
          <Route path="/fitness" element={<FitnessPage />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}
