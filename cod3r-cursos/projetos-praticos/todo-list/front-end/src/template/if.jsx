import React from 'react'

export default props => {
    if(props.test){
        return props.children
    } else {
        return false
    }

}

// vou criar um  componente normal, vou criar aqui a funcao
// recebendo props e aqui dentro eu vou criar um teste, se props
// teste for verdadeiro, retorne props.chrildren, retorna o objeto
// que esta dentro da tag if, se nao for verdadeiro retorna falso,

// este eo componente que vai nos ajudar a nos outros componentes farerem
// uma condicional sm necessidade de outros componentes fazerem if do