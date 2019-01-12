import React, {Component} from 'react'
import {fetchSearchPokemon} from './actions/actions';

import PokemonListContainer from './containers/PokemonListContainer';
import PokeForm from "./components/pokeform";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PokeForm onChange={(values,dispatch) => dispatch(fetchSearchPokemon(values.pokemonname))}/>
                <PokemonListContainer/>
            </div>
        );
    }
}

export default App;
