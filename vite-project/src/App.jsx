import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Blog from './pages/Blog';
import Eventos from './pages/Eventos.jsx'
import AreaColaborador from './pages/AreaColaborador.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />{}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/areacolaborador" element={<AreaColaborador />} /> 

      </Routes>
      <Footer/>{}
    </BrowserRouter>
  );
}



// para rodar o front end: npm run dev