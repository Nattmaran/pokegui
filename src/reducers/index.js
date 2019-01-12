import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pokemon from './pokemon'
import pokemonSearch from './pokemonSearch'


export default combineReducers({
    pokemon,
    pokemonSearch,
    form: formReducer
})