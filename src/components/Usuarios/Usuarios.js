import React, { useState, useEffect } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

function Usuarios() {

  const [usuarios, setUsuarios] = useState([])

  //Antes usava-se -> XMLHttpRequest requisição Ajax Java Script
  //Requisição HTTP/Ajax do tipo GET com React para pegar as informações existentes na API
  //useEffect -> HOOKS
  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((resposta) => resposta.json())
      .then((dados) => {
        const usuarios = dados.data.map(usuario => {
          return {
            id: usuario.id,
            nome: usuario.first_name,
            sobrenome: usuario.last_name,
            email: usuario.email
          }
        })
        setUsuarios(usuarios)
      })
  },[] )// O array vazio como segundo argumento faz com que esse efeito só seja executado uma vez, equivalente ao componentDidMount

  //usuariosAtuais -> pegam o estado atual do array
  //usuario -> adiciona o novo usuário
  //usando HOOKS
  const adicionarUsuario = (usuario) => {
    setUsuarios(usuariosAtuais => [...usuariosAtuais, usuario])
  }

  //Requisição HTTP/Ajax do tipo DELETE com React para deletar um usuário na API
  const removerUsuario = (usuario) => {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then((resposta) => {
          if (resposta.ok) {
            setUsuarios(usuarios.filter(x => x.id !== usuario.id))
          }
        })
    }
  }

  return (
    <>
      <AdicionarUsuario adicionarUsuario={adicionarUsuario} />

      {usuarios.map(usuario => (
        <Usuario key={usuario.id}
          usuario={usuario}
          removerUsuario={() => removerUsuario(usuario)}
        />
      ))}
    </>
  )
}

export default Usuarios