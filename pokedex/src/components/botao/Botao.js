import React from 'react'
import { BotaoEstilizado } from './styled'


const Botao = (props) => {

    return <div>
        <BotaoEstilizado onClick={props.onClick}>{props.nome}</BotaoEstilizado>
    </div>

}

export default Botao