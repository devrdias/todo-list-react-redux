import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from '../actions/todos_action';


function Filter(props) {
    const { filterName, filterCondition } = props;

    console.log('Filter', filterCondition);

    const applyFilter = () => {
        switch (filterCondition) {
            case 'ALL':
                return props.filterTodosAll();
            case 'COMPLETED':
                return props.filterTodosCompleted();
            case 'NOT_COMPLETED':
                return props.filterTodosNotCompleted();
            default:
                return props.filterTodosAll();
        }
    }

    return (
        <div>
            <button onClick={applyFilter}>{filterName}</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(null, mapDispatchToProps)(Filter)
