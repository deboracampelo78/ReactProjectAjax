import React from 'react';
import './App.css';

import Usuarios from './components/Usuarios/Usuarios'

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href='/' className='active'>Início</a></li>
            <li><a href='/usuarios'>Usuários Cadastrados</a></li>
            <li><a href='/adicionarUsuario'>Cadastrar Usuário</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Usuarios />
      </main>
    </div>
  );
}

export default App;
