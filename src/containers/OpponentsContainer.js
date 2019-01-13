import { connect } from 'react-redux'
import Opponents from "../components/opponents";

const mapStateToProps = (state, ownProps) => ({
    opponents: state.opponents
});


const OpponentsContainer = connect(
    mapStateToProps,
    null,
)(Opponents);

export default OpponentsContainer