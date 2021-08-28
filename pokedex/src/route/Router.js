import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import HomePage from '../pages/homePage/HomePage'
import PokedexPage from '../pages/pokedexPage/PokedexPage'
import DetailsPage from '../pages/detailsPage/DetailsPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={'/'}>
                    <HomePage />
                </Route>

                <Route exact path={'/pokedex'}>
                    <PokedexPage />
                </Route>

                <Route exact path={'/details/:pokeNome'}>
                    <DetailsPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
