import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pokemon from './pokemon'
import pokemonSearch from './pokemonSearch'
import opponents from './opponents'


export default combineReducers({
    pokemon,
    pokemonSearch,
    opponents,
    form: formReducer
})