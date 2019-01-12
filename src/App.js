import React, {Component} from 'react'
import {fetchPokemon} from './actions/actions';

import PokemonContainer from './containers/PokemonContainer';
import PokeForm from "./components/pokeform";

class App extends Component {
    render() {
        return (
            <div className="App">
                <PokeForm onSubmit={(values,dispatch) => dispatch(fetchPokemon(values.pokemonname))}/>
                <PokemonContainer/>
            </div>
        );
    }
}

export default App;
