import ReactDOM from 'react-dom'
import React from 'react'
//import PrimeiroComponente from './componentes/Primeiro-componente'
//import {CompA, CompB as B} from './componentes/DoisComponentes'
//import MultiElementos from './componentes/MultiElementos'
//import CorpA, {CompB as B} from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'
import FamiliaSilva from './componentes/FamiliaSilva'
const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia>
            <Membro nome= " Andre " sobrenome= " Pereira "/>
            <Membro nome= " Mariana " sobrenome= " Pereira "/>

        </Familia>
        <Familia>
            <Membro nome= " Bia " sobrenome= " Pereira "/>
            <Membro nome= " Gustavo " sobrenome= " Pereira "/>

        </Familia>

        {/* <FamiliaSilva /> */}
       {/* <CompA valor="Ola eu sou A"/>
       <B valor="B na area"/> */}
    </div>

    , elemento)


// ReactDOM.render(' Ola react ', elemento)