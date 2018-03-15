import { connect } from 'react-redux';
import Counter from '../components/Counter';

const mapStateToProps = state => ({
    todos: state.todos
})


export default connect(mapStateToProps)(Counter);