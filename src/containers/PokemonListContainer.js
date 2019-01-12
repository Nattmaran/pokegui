import { connect } from 'react-redux'
import PokemonList from '../components/pokemonlist'

const mapStateToProps = (state, ownProps) => ({
    pokemonSearch: state.pokemonSearch
});

const PokemonListContainer = connect(
    mapStateToProps,
    null,
)(PokemonList);

export default PokemonListContainer