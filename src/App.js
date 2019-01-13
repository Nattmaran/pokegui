import React, {Component} from 'react'
import {fetchSearchPokemon} from './actions/actions';

import PokemonListContainer from './containers/PokemonListContainer';
import PokeForm from "./components/pokeform";
import OpponentsContainer from "./containers/OpponentsContainer";

class App extends Component {
    render() {
        return (
            <div className="App container">

                <div className="row align-items-start">
                    <div className="col-lg-4">
                        <PokeForm
                            onChange={(values, dispatch) => dispatch(fetchSearchPokemon(values.pokemonname))}/>
                        <PokemonListContainer/>
                    </div>

                    <div className="col-lg-4">Battle Stats</div>

                    <div className="col-lg-2 justify-self-center">
                        <OpponentsContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
