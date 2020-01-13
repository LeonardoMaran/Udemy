import React from 'react'
import ReactDOM from 'react-dom'
import{combineReducers, createStore} from 'redux'
import Field from './field'
import { Provider } from 'react-redux'

const reducers = combineReducers({

})

ReactDOM.render(
    <Field initialValue='Teste'/>,
    document.getElementById(' app '))


    //combineReducer - cria estados
    //createStore - combina todos osestados num estdo unico
    //componente pegar os estado e passar os estados componentes externos


