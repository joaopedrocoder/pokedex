import React from 'react'
import Footer from '../../components/footer/Footer'
import {
    HeaderDiv,
    LogoPokemon,
    ConteudoDiv,
    ContainerConteudo,
    DivTitulo,
    DivPrincipal,
    DivImg,
    DivInfo,
    Estatisticas,
    Golpes,
    DivTipo
} from './styled'
import Botão from '../../components/botao/Botao'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'

const Tipo = styled.h4`
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    margin: 0 10px;
    text-transform: capitalize;
    background-color: ${({ cor }) => cor};
`

const DetailsPage = () => {
    const history = useHistory()
    const [pokeDetalhes, setPokeDetalhes] = React.useState(undefined)
    // const [imagem, setImagem] = React.useState()
    // const [estatisticas, setEstatisticas] = React.useState([])
    // const [golpes, setGolpes] = React.useState([])
    // const [tipos, setTipos] = React.useState([])
    const { pokeNome } = useParams()

    React.useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeNome}`)
            .then((res) => {
                setPokeDetalhes(res.data)
                // setImagem(res.data.sprites.other['official-artwork'].front_default)
                // setEstatisticas(res.data.stats)
                // setGolpes(res.data.moves)
                // setTipos(res.data.types)
            })
            .catch((err) => {
                alert(err)
            })

    }, [])

    return (
        <div>
            <HeaderDiv>
                <ConteudoDiv>
                    <div>
                        <Botão onClick={() => history.push('/')} nome="Voltar para Home" />
                    </div>

                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />

                    <div>
                        <Botão onClick={() => history.push('/pokedex')} nome="Ir para Pokedex" />
                    </div>
                </ConteudoDiv>
            </HeaderDiv>

            {pokeDetalhes ? 
            <ContainerConteudo>
                <DivTitulo>
                    <h1>{pokeDetalhes.name} </h1>
                    <span>#{pokeDetalhes.id}</span>
                </DivTitulo>

                <DivPrincipal>
                    <div>
                        <DivImg>
                            <img src={pokeDetalhes.sprites.other['official-artwork'].front_default} alt='Imagem do pokemon' />
                        </DivImg>

                        <DivTipo>
                            {pokeDetalhes.types.map((tipo) => {
                                switch (tipo.type.name) {
                                    case 'fire':
                                        return <Tipo cor={'#FD7D24'}>{tipo.type.name}</Tipo>
                                    case 'water':
                                        return <Tipo cor={'#4592C4'}>{tipo.type.name}</Tipo>
                                    case 'grass':
                                        return <Tipo cor={'#9BCC50'}>{tipo.type.name}</Tipo>
                                    case 'poison':
                                        return <Tipo cor={'#B97FC9'}>{tipo.type.name}</Tipo>
                                    case 'bug':
                                        return <Tipo cor={'#729F3F'}>{tipo.type.name}</Tipo>
                                    case 'normal':
                                        return <Tipo cor={'#A4ACAF'}>{tipo.type.name}</Tipo>
                                    case 'electric':
                                        return <Tipo cor={'#EED535'}>{tipo.type.name}</Tipo>
                                    case 'ground':
                                        return <Tipo cor={'#AB9842'}>{tipo.type.name}</Tipo>
                                    case 'rock':
                                        return <Tipo cor={'#A38C21'}>{tipo.type.name}</Tipo>
                                    case 'flying':
                                        return <Tipo cor={'#3EC8F0'}>{tipo.type.name}</Tipo>
                                    case 'ghost':
                                        return <Tipo cor={'#7B62A3'}>{tipo.type.name}</Tipo>
                                    case 'ice':
                                        return <Tipo cor={'#51C4E7'}>{tipo.type.name}</Tipo>
                                    case 'fighting':
                                        return <Tipo cor={'#D56723'}>{tipo.type.name}</Tipo>
                                    case 'psychic':
                                        return <Tipo cor={'#F366B9'}>{tipo.type.name}</Tipo>
                                    case 'dragon':
                                        return <Tipo cor={'#F16E57'}>{tipo.type.name}</Tipo>
                                    default:
                                        return <Tipo cor={'#F0ECA8'}>{tipo.type.name}</Tipo>
                                }
                            })}
                        </DivTipo>
                    </div>


                    <DivInfo>
                        <div>
                            <h2>Estatisticas</h2>
                            <Estatisticas>
                                {pokeDetalhes.stats.map((stat, index) => {
                                    return (
                                        <h4 key={index}>{stat.stat.name} - <span>{stat.base_stat}</span></h4>
                                    )
                                })}
                            </Estatisticas>

                            <h2>Golpes</h2>
                            <Golpes>
                                {pokeDetalhes.moves.filter((golpe, index) => {
                                    return index < 5
                                }).map((golpe, index) => {
                                    return (
                                        <h4 key={index}>{golpe.move.name}</h4>
                                    )
                                })}
                            </Golpes>
                        </div>
                    </DivInfo>
                </DivPrincipal>

            </ContainerConteudo>
            :'Carregando...'}
            <Footer />
        </div>
    )
}

export default DetailsPage
