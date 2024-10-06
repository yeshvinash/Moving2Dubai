import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Aboutus from "./pages/Aboutus/Aboutus";
import Faqs from "./pages/Faqs/Faqs";
import "./App.css";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Router>
        <ScrollTop/>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home"} element={<Home />} />
            <Route path={"/about-us"} element={<Aboutus />} />
            <Route path={"/Faqs"} element={<Faqs />} />
          </Routes>
          <Footer />
        </Router>
    </>
  );
}

export default App;
