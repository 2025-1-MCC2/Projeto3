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
import Relatorio from './pages/Relatorio.jsx'
import PrivateRoute from './components/PrivateRoute'
import Kpi from './pages/Kpi.jsx'
import Participacao from './pages/Participacao.jsx'
import Dashboard from './pages/Dashboard.jsx'

import Progresso from './pages/Progresso.jsx'

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
        <Route path="/eventos" element={<PrivateRoute><Eventos /></PrivateRoute>} />
        <Route path="/areacolaborador" element={<PrivateRoute><AreaColaborador /></PrivateRoute>} /> \
        <Route path="/relatorio" element={ <PrivateRoute> <Relatorio/> </PrivateRoute> }/>
        <Route path="/kpi" element={ <PrivateRoute> <Kpi/> </PrivateRoute> }/>
        <Route path="/dashboard" element={ <PrivateRoute> <Dashboard/> </PrivateRoute> }/>
        <Route path="/participacao" element={ <PrivateRoute> <Participacao/> </PrivateRoute> }/>
        <Route path="/progresso" element={ <PrivateRoute> <Progresso/> </PrivateRoute> }/>

      </Routes>
      <Footer/>{}
    </BrowserRouter>
  );
}



// para rodar o front end: npm run dev