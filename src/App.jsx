import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DevPage from "./Pages/DevPage";
import FitnessPage from "./Pages/FitnessPage";
import EsportsPage from "./Pages/EsportsPage";
import DbzPage from "./Pages/DbzPage";
import Home from "./Pages/Home";

import "/src/css/styles.css";
import { Route, Routes } from "react-router-dom";
import ExperiencePage from "./Pages/ExperiencePage";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="maincontainer">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/experience" element={<ExperiencePage />}></Route>
          <Route path="/esports" element={<EsportsPage />}></Route>
          <Route path="/dev" element={<DevPage />}></Route>
          <Route path="/fitness" element={<FitnessPage />}></Route>
          <Route path="/dbz" element={<DbzPage />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </>
  );
}
