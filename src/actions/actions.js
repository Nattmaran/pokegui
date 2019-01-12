import {POKEMON_SUCCCESS,POKEMON_REQUEST,POKEMON_FAIL} from './actionTypes'

import axios from 'axios'

function pokemonRequest() {
    return {
        type: POKEMON_REQUEST
    }
}

function pokemonFail() {
    return {
        type: POKEMON_FAIL
    }
}

function pokemonSucess(pokemon) {
    return {
        type: POKEMON_SUCCCESS,
        pokemon: pokemon
    }
}

export function fetchPokemon(pokemonName) {
    return function(dispatch) {

        dispatch(pokemonRequest())

        return axios.get('http://localhost:3001/pokemon/'+pokemonName)
            .then(response => response.data)
            .then(json => dispatch(pokemonSucess(json)))
            .catch(error => dispatch(pokemonFail()))
    }
}