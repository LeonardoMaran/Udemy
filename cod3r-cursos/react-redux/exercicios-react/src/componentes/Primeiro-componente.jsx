import React from 'react'

let isLegal = true

export default (props) =>
  <div>
  <h1>{props.valor}</h1>
  <h1>{props.aBcD}</h1>
  <h2>{1 + 1}</h2>
  <p>Legal {isLegal ? 'sim': 'Nao'}</p>
</div>

//uma vez utilizando arrow function, eu posso tirar
//as chaves e  posso tirar a palavra return

// export default function() {
//     return <h1>Primeiro Componente</h1>
// }

// alt+shift+setaparabaixo = duplicar

// mover = alt+seta para cima e para baixo

//quando se temumafuncao anonima nao precisa
//definir um nome quando estou obrigatoriamente
//exportando direto na funcao.