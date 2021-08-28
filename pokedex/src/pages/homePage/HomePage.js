import React, { useContext, useState } from 'react'
import Footer from '../../components/footer/Footer'
import { useHistory } from 'react-router-dom'
import {
    ContainerConteudo,
    HeaderContainer,
    LogoPokemon,
    ConteudoDiv,
    ConatinerCards,
    ContainerSearch
} from './styled'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import Botão from '../../components/botao/Botao'
import PokeCard from '../../components/pokecard/PokeCard'
import Search from '../../components/search/Search'

const HomePage = () => {
    const history = useHistory()
    const global = useContext(GlobalStateContext)
    const [searchValue, setSearchValue] = useState('')

    const irParaPokedex = () => {
        history.push('/pokedex')
    }

    const addPokedex = ((pokemon) => {
        alert(`${pokemon.name} adicionado a pokedex!`)
        global.setPokedex([...global.pokedex, pokemon])
    })

    const detalhes = (pokeNome) => {
        history.push(`/details/${pokeNome}`)
    }

    const pokemonsFiltrados = global.pokemons.filter((pokemon)=> pokemon.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter((pokemon) => {
        const pokedex = global.pokedex.find((pokemonEscolhido) => {
            if (pokemon.id === pokemonEscolhido.id) {
                return true
            } else {
                return false
            }
        })

        if (pokedex) {
            return false
        } else {
            return true
        }
    })

    const onChange = (e) =>{
        setSearchValue(e.target.value)
        console.log(searchValue)
    }

    return (
        <div>
            <HeaderContainer>
                <ConteudoDiv>
                    <div>
                        <Botão onClick={irParaPokedex} nome="Ir para Pokedex" />
                    </div>
                    <LogoPokemon src='https://i2.wp.com/multarte.com.br/wp-content/uploads/2019/03/pokemon-png-logo.png?fit=2000%2C736&ssl=1' alt='Logo-Pokemon' />
                </ConteudoDiv>
            </HeaderContainer>
            <ContainerConteudo>
                <ContainerSearch>
                    <h1>Lista de Pokemons</h1>
                    <Search
                        value={searchValue}
                        onChange={onChange}
                    />
                </ContainerSearch>
                
                <ConatinerCards>
                    {pokemonsFiltrados.length > 1 ? pokemonsFiltrados.map((pokemon) => {
                        return (
                            <li key={pokemon.id}>
                                <PokeCard
                                    nome={pokemon.name}
                                    id={pokemon.id}
                                    imagem={pokemon.sprites.front_default}
                                    tipo={pokemon.types.map((tipo, index) => {
                                        return (
                                            <span key={index}> -{tipo.type.name}</span>
                                        )
                                    })}
                                    nomeBotaoEsquerdo="+ pokedex"
                                    onClickPokedex={() => addPokedex(pokemon)}
                                    onClickDetalhes={() => detalhes(pokemon.name)}
                                />
                            </li>
                        )
                    }):<h1>Nenhum Pokemon encontrado</h1>}
                </ConatinerCards>
            </ContainerConteudo>
            <Footer />
        </div>
    )
}
export default HomePage