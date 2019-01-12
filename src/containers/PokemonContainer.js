import { connect } from 'react-redux'
import Pokemon from '../components/pokemon'


const mapStateToProps = (state, ownProps) => ({
    pokemon: state.pokemon
});

const PokemonContainer = connect(
    mapStateToProps,
)(Pokemon);

export default PokemonContainer