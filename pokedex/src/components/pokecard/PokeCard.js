import React from 'react'
import {
    Card,
    BgCor,
    DivNome,
    Nome,
    DivImg,
    Info,
    Tipo,
    DivBotao
} from './styled'
import Botao from '../botao/Botao'

const PokeCard = (props) => {
    return (
        <div>
            <Card>
                <BgCor></BgCor>
                <DivImg>
                    <img src={props.imagem} alt='imagem do pokemon' />
                </DivImg>

                <DivNome>
                    <Nome>{props.nome}</Nome>
                    <h6>#{props.id}</h6>
                </DivNome>

                <Info>
                    <Tipo>
                        <h5>Tipo</h5>
                        <p>{props.tipo}</p>
                    </Tipo>
                </Info>

                <DivBotao>
                    <Botao
                        nome={props.nomeBotaoEsquerdo}
                        onClick={props.onClickPokedex}
                    />
                    <Botao
                        nome='Detalhes'
                        onClick={props.onClickDetalhes}
                    />
                </DivBotao>
            </Card>
        </div>
    )
}

export default PokeCard
