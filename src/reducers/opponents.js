import { ADD_TO_OPPONENTS } from '../actions/actionTypes'

const initialState = {
    pokemon1: {},
    pokemon2: {},
    pokemon3: {},
    pokemon4: {},
    pokemon5: {},
    pokemon6: {},
};

const opponents = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_OPPONENTS:
            return {...state,
                    pokemon1: [...state.pokemon,action.pokemon]
            };

        default:
            return state;
    }
};

export default opponents;