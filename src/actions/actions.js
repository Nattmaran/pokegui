import {POKEMON_SUCCCESS,POKEMON_REQUEST,POKEMON_FAIL,POKEMONSEARCH_FAIL,POKEMONSEARCH_REQUEST,POKEMONSEARCH_SUCCCESS} from './actionTypes'

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


function pokemonSearchRequest() {
    return {
        type: POKEMONSEARCH_REQUEST
    }
}

function pokemonSearchFail() {
    return {
        type: POKEMONSEARCH_FAIL
    }
}

function pokemonSearchSucess(pokemon) {
    return {
        type: POKEMONSEARCH_SUCCCESS,
        pokemon: pokemon
    }
}

export function fetchPokemon(id) {
    return function(dispatch) {

        dispatch(pokemonRequest());

        return axios.get('http://localhost:3001/pokemon/id/'+id)
            .then(response => response.data)
            .then(json => dispatch(pokemonSucess(json)))
            .catch(error => dispatch(pokemonFail()))
    }
}

export function fetchSearchPokemon(pokemonName) {
    return function(dispatch) {

        dispatch(pokemonSearchRequest());

        return axios.get('http://localhost:3001/pokemon/name/'+pokemonName)
            .then(response => response.data)
            .then(json => dispatch(pokemonSearchSucess(json)))
            .catch(error => dispatch(pokemonSearchFail()))
    }
}