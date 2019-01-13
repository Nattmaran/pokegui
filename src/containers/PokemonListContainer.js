import { connect } from 'react-redux'
import PokemonList from '../components/pokemonlist'
import {addToOpponents} from "../actions/actions";

const mapDispatchToProps = (dispatch,ownProps) => ({
    addToOpponents: (pokemon) => dispatch(addToOpponents(pokemon))
});

const mapStateToProps = (state, ownProps) => ({
    pokemonSearch: state.pokemonSearch
});

const PokemonListContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PokemonList);

export default PokemonListContainer