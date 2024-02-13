import React, { useState } from 'react'

import './AdicionarUsuario.css'
import DCtechImage from './dctech2.png'


function AdicionarUsuario(props) {

  //nome -> estado em que se encontra a variável nome
  //setState -> função que vai se atualizar o estado da variável nome  
  //usando Hooks - useState deve estar sempre no corpo e no início da função principal, e nunca dentro de um if
  const [nome, setNome] = useState('')
  const [sobrenome, setSobrenome] = useState('')
  const [email, setEmail] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault()
    //Requisição HTTP/Ajax do tipo POST com React para enviar as informações para um Banco de Dados
    const usuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email
    }

    fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/Json' },
      body: JSON.stringify(usuario)
    })
      .then((resposta) => resposta.json())
      .then((dados => {
        setNome('')
        setSobrenome('')
        setEmail('')
        props.adicionarUsuario(dados)
      }))
  }


  return (
    <div className="AdicionarUsuario">
      <img src={DCtechImage} alt="Dc Tech Logo" className='logoImage' />
      <h2>Cadastro de Novo Usuário</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="Linha">
          <div className="Coluna">
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              value={nome}
              onChange={event => setNome(event.target.value)}
              required>
            </input>
          </div>
          <div className="Coluna">
            <label>Sobrenome</label>
            <input
              type="text"
              name="sobrenome"
              value={sobrenome}
              onChange={event => setSobrenome(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <div className="Linha">
          <div className="Coluna">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required>
            </input>
          </div>
        </div>
        <button type="submit">
          Adicionar
        </button>
      </form>
    </div>
  )

}

export default AdicionarUsuario