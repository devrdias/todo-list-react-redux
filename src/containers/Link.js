import { connect } from 'react-redux';
import { filterTodos } from '../actions/filterTodos_action';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(filterTodos(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Link);