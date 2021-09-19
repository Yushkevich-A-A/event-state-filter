import React from 'react';
import PropTypes from 'prop-types';
import './Toolbar.css';

function Toolbar(props) {
    const { filters, selected, onSelectFilter } = props;
    return (
        <ul className="toolbar">
            {
                filters.map( item => {
                    return <li 
                    key={item} 
                    onClick={onSelectFilter} 
                    className={['toolbar-item', selected === item ? 'selected' : null].join(' ')}>{item}</li>
                })
            }
        </ul>
    )
}

Toolbar.propTypes = {
    filters: PropTypes.array.isRequired,
    selected: PropTypes.string.isRequired,
    onSelectFilter: PropTypes.func.isRequired
};

export default Toolbar;

