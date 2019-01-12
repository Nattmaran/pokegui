import { POKEMON_SUCCCESS, POKEMON_REQUEST, POKEMON_FAIL } from '../actions/actionTypes'

const initialState = {
    fetching: "dormant",
    pokemon:
        {
            id: {},
            name: {}
        }
};

const pokemon = (state = initialState, action) => {

    switch (action.type) {

        case POKEMON_REQUEST:
            return {...state, fetching: "fetching"};

        case POKEMON_SUCCCESS:
            return {
                ...state,
                fetching: "success",
                pokemon: {id: action.pokemon.id, name: action.pokemon.name}
            };

        case POKEMON_FAIL:
            return {...state, fetching: "failed"};
        default:
            return state;
    }
};

export default pokemon;