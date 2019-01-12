import { POKEMONSEARCH_SUCCCESS, POKEMONSEARCH_REQUEST, POKEMONSEARCH_FAIL } from '../actions/actionTypes'

const initialState = {
    fetching: "dormant"
};

const pokemonSearch = (state = initialState, action) => {

    switch (action.type) {

        case POKEMONSEARCH_REQUEST:
            return {...state, fetching: "fetching"};

        case POKEMONSEARCH_SUCCCESS:
            var pokemon = action.pokemon.pokemonList;
            return {
                ...state,
                fetching: "success",
                pokemonList: pokemon
            };

        case POKEMONSEARCH_FAIL:
            return {...state, fetching: "failed"};
        default:
            return state;
    }
};

export default pokemonSearch;