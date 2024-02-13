import React from "react"
import DCtechImage from './dctech2.png'
import './Home.css'

function Home() {
    return <>
    <img src={DCtechImage} alt="Dc Tech Logo" className='logoImage' />
    <h1>Página Inicial</h1>
    <p>Seja Bem Vindo</p>
    </>
}

export default Home