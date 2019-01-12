import { POKEMON_SUCCCESS, POKEMON_REQUEST, POKEMON_FAIL } from '../actions/actionTypes'

const url = 'http://localhost:3001/';

const initialState = {
    fetching: "dormant",
    pokemon: {},
    thumbnail: {}
};

const pokemon = (state = initialState, action) => {

    switch (action.type) {

        case POKEMON_REQUEST:
            return {...state, fetching: "fetching"};

        case POKEMON_SUCCCESS:
            return {
                ...state,
                fetching: "success",
                pokemon: action.pokemon,
                thumbnail: (url+action.pokemon.thumbnail)
            };

        case POKEMON_FAIL:
            return {...state, fetching: "failed"};
        default:
            return state;
    }
};

export default pokemon;