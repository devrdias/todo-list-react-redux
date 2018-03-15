import React from 'react';
import Filter from '../containers/Link';
import { TodosFilter } from '../actions/filterTodos_action';


const Footer = () => (
    <div>
        <span>Show: </span>
        <Filter
            filter={TodosFilter.SHOW_ALL}>
            All
        </Filter>
        <Filter
            filter={TodosFilter.SHOW_ACTIVE}>
            Active
        </Filter>
        <Filter
            filter={TodosFilter.SHOW_COMPLETED}>
            Completed
        </Filter>
    </div>
)

export default Footer;
