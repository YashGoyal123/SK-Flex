import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Slideshow from './components/slideshow';
import Marquee from './components/marquee';
import AcpElevation from './components/acp_elevation';
import Acrylic from './components/acrylic';
import StainlessSteel from './components/stainless_steel';
import NeonSign from './components/neon_sign';
import Wallpaper from './components/wallpaper';
import FlexHoarding from './components/flex_hoarding';
import AboutUs from './components/AboutUs'; // Import About Us page
import CupPrinting from './components/cupprinting';
import PillowPrinting from './components/pillowprinting';
import GlowSign from './components/glow_sign';
import TshirtPrinting from './components/tshirt';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Marquee (Displayed on all pages) */}
        <Marquee text="Welcome to Sk Flex. We do wholesale printing of flex. We also do all types of printing on flex, Acrylic letters, social media designs, 3D wallpapers, glow sign boards, neon sign boards. Email info: skflex@yahoo.com , Contact info: 81950-22377, 72775-00081" />

        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/acp-elevation" element={<AcpElevation />} />
          <Route path="/acrylic" element={<Acrylic />} />
          <Route path="/stainless-steel" element={<StainlessSteel />} />
          <Route path="/neon-sign" element={<NeonSign />} />
          <Route path="/glow-sign" element={<GlowSign />} />
          <Route path="/wallpaper" element={<Wallpaper />} />
          <Route path="/flex-hoarding" element={<FlexHoarding />} />
          <Route path="/cup-printing" element={<CupPrinting/>} />
          <Route path="/pillow-printing" element={<PillowPrinting/>} />
          <Route path="/tshirt-printing" element={<TshirtPrinting/>} />

        </Routes>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="App">
      <div className='slideshowdiv'>
        <Slideshow />
        <div id="acp_elevation"><AcpElevation/></div>
        <div id="acrylic"><Acrylic /></div>
        <div id="stainless_steel"><StainlessSteel /></div>
        <div id="neon_sign"><NeonSign /></div> {/* This is the neon sign section */}
        <div id="glow_sign"><GlowSign/></div>
        <div id="wallpaper"><Wallpaper /></div>
        <div id="flex_hoarding"><FlexHoarding /></div>
        <div id="cup_printing"><CupPrinting/></div>
        <div id="pillow_printing"><PillowPrinting/></div>
        <div id="tshirt_printing"><TshirtPrinting/></div>
      </div>
    </div>
);

export default App;
