import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ProgrammingPage from "./Pages/ProgrammingPage";
import FitnessPage from "./Pages/FitnessPage";
import EsportsPage from "./Pages/EsportsPage";
import TestPage from "./Pages/TestPage";
import Home from "./Pages/Home";
import TestPage2 from "./Pages/TestPage2";

import "/src/css/styles.css";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/esports" element={<EsportsPage />}></Route>
        <Route path="/programming" element={<ProgrammingPage />}></Route>
        <Route path="/fitness" element={<FitnessPage />}></Route>
        <Route path="/test" element={<TestPage />}></Route>
        <Route path="/test2" element={<TestPage2 />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}
