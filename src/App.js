import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

import Usuarios from './components/Usuarios/Usuarios'
import DetalhesDoUsuario from './components/DetalhesUsuario/DetalhesUsuario';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li><NavLink to='/'>Início</NavLink></li>
              <li><NavLink to='/adicionar'>Cadastro de Usuários</NavLink></li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios/:codigo" element={<DetalhesDoUsuario />} />
            <Route path="/adicionar" element={<Usuarios />} />
            <Route path="*" element={<PaginaNaoEncontrada />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function PaginaNaoEncontrada(){
  return <>
  <h1>404</h1>
  <p>Página não encontrada</p>
  </>
}

export default App;
