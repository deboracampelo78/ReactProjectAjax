import React, { Component } from 'react'

import AdicionarUsuario from '../AdicionarUsuario/AdicionarUsuario'
import Usuario from '../Usuario/Usuario'

class Usuarios extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarios: []
    }

    this.adicionarUsuario = this.adicionarUsuario.bind(this)
  }

  adicionarUsuario(usuario) {
    const usuarios = [...this.state.usuarios, usuario]
    this.setState({ usuarios: usuarios })
  }

  //Requisição HTTP/Ajax do tipo DELETE com React para deletar um usuário na API
  removerUsuario(usuario) {
    if (window.confirm(`Tem certeza que deseja remover "${usuario.nome} ${usuario.sobrenome}"?`)) {
      fetch(`https://reqres.in/api/users/${usuario.id}`, {
        method: 'DELETE'
      })
        .then((resposta) => {
          console.log(resposta)
          let usuarios = this.state.usuarios
          usuarios = usuarios.filter(x => x.id !== usuario.id)
          this.setState({ usuarios: usuarios })
        })
    }
  }

  //Antes usava-se -> XMLHttpRequest requisição Ajax Java Script
  //Requisição HTTP/Ajax do tipo GET com React para pegar as informações existentes na API
  componentDidMount() {
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
        this.setState({ usuarios: usuarios })
      })
  }

  render() {
    return (
      <>
        <AdicionarUsuario adicionarUsuario={this.adicionarUsuario} />

        {this.state.usuarios.map(usuario => (
          <Usuario key={usuario.id}
            usuario={usuario}
            removerUsuario={this.removerUsuario.bind(this, usuario)}
          />
        ))}
      </>
    )
  }
}

export default Usuarios