import React, { useState, useEffect } from 'react'
import { GlobalStateContext } from './GlobalStateContext'
import axios from 'axios'

const GlobalState = (props) => {
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex] = useState([])

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=20&offset=')
            .then((res) => {
                pegaDetalhePokemon(res.data.results)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const pegaDetalhePokemon = (array) => {
        for (let item of array) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then((res) => {
                    setPokemons((pokemons => [...pokemons, res.data]))
                }).catch((err) => {
                    alert(err)
                })
        }
    }

    console.log(pokemons)

    return <GlobalStateContext.Provider value={{ pokemons, setPokemons, pokedex, setPokedex }}>
        {props.children}
    </GlobalStateContext.Provider>

}

export default GlobalState