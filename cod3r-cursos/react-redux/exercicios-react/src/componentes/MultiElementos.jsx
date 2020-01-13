import React from 'react'

// 3 possibilidades de retornar multiplos elementos um do lado
// do outro. elementos do sentido adjacentes um do lado do outro
// e nao dentro do outro.

export default props => [

<h1>Parte 1</h1>,
<h2>Parte 2</h2>
]
export default props =>
<React.Fragment>
<h1>Parte 1</h1>
<h2>Parte 2</h2>
</React.Fragment>

// Solucao 01. Mais Usada
// export default props =>

// <div>
// <h1>Parte 1</h1>
// <h2>Parte 2</h2>

// </div>