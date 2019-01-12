import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import pokemon from './pokemon'


export default combineReducers({
    pokemon: pokemon,
    form: formReducer
})