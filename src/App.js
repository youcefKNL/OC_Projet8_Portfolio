import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Galery from "./pages/Galery";
import Contact from "./pages/Contact";
//import { DataDone } from "./components/DataContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App = () => {
  let basename = "/";
  if (window.location.hostname === "youcefknl.github.io") {
    basename = "/OC_Projet7_Kasa";
  }
  return (
    <BrowserRouter basename={basename}>
      {/* <DataDone> */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/galery" element={<Galery />} />
        <Route path="/contact" element={<Contact />} />
        {/* //<Route path="*" element={<Page404 />} /> */}
      </Routes>
      <Footer />
      {/* </DataDone> */}
    </BrowserRouter>
  );
};

export default App;
