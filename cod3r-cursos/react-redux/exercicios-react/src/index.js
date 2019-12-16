import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './componentes/Primeiro-componente'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
       <PrimeiroComponente valor="Bom dia" aBcD={Math.pow(2, 8)}/>
    </div>

    , elemento)


// ReactDOM.render(' Ola react ', elemento)