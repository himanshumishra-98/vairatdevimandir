
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import Home from './pages/Home';
import AboutTemple from './pages/AboutTemple';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import Donate from './pages/Donate';
import AboutChikhaldara from "./pages/AboutChikhaldara";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutTemple />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<Events />} />
          <Route path="donate" element={<Donate />} />
          <Route path="aboutChikhaldara" element={<AboutChikhaldara />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
