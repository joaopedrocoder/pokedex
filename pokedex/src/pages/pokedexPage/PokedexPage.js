import React, { useContext } from 'react'
import Footer from '../../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import Botão from '../../components/botao/Botao'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import PokeCard from '../../components/pokecard/PokeCard'
import {
    HeaderDiv,
    LogoPokemon,
    ConteudoPokedex,
    ContainerCards,
    PokedexVazia,
    ConteudoDiv
} from './styled'


const PokedexPage = () => {
    const global = useContext(GlobalStateContext)
    const history = useHistory()

    const irParaHome = () => {
        history.push('/')
    }

    const removePokemon = (index) => {
        let novaPokedex = [...global.pokedex]
        novaPokedex.splice(index, 1)
        global.setPokedex(novaPokedex)

    }

    const detalhes = (pokeNome) => {
        history.push(`/details/${pokeNome}`)
    }

    return (
        <div>

            <HeaderDiv>
                <ConteudoDiv>
                    <div>
                        <Botão onClick={irParaHome} nome="Voltar para Home" />
                    </div>
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </ConteudoDiv>

            </HeaderDiv>

            <ConteudoPokedex>
                <h1>Pokedex</h1>
                <ContainerCards>
                    {global.pokedex.length > 0 ?
                        global.pokedex.map((pokemon, index) => {
                            return (
                                <li key={pokemon.id}>
                                    <PokeCard
                                        nome={pokemon.name}
                                        imagem={pokemon.sprites.front_default}
                                        tipo={pokemon.types.map((tipo, index) => {
                                            return (
                                                <span key={index}> -{tipo.type.name}</span>
                                            )
                                        })}
                                        nomeBotaoEsquerdo="Remover"
                                        onClickDetalhes={() => detalhes(pokemon.name)}
                                        onClickPokedex={() => removePokemon(index)}
                                    />
                                </li>
                            )
                        })

                        : <PokedexVazia><h1>Nenhum pokemon foi adicionado a pokedex.</h1>
                            <img src='https://www.pngall.com/wp-content/uploads/5/Cute-Pikachu-PNG-Clipart.png' alt='img'/>
                        </PokedexVazia>}

                </ContainerCards>
            </ConteudoPokedex>
            <Footer />
        </div>
    )
}

export default PokedexPage