import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Toolbar from './Toolbar/Toolbar';
import ProjectList from './ProjectList/ProjectList';

import './Portfolio.css';

function Portfolio(props) {
    const { data } = props;

    const [projects, setProjects] = useState(data);

    let [ selected, setSelected ] = useState('All');


    const onSelectFilter = (event) => {
        const filterValue = event.currentTarget.textContent;
        setSelected(filterValue);
        filterValue !== "All" ? 
            setProjects(data.slice().filter(item => item.category === filterValue)) :
            setProjects(data);
    }

    const filtes = ["All", "Websites", "Flayers", "Business Cards"];
    return (
        <div className='block-portfolio'>
            <Toolbar filters={filtes}
            selected={selected}
            onSelectFilter={onSelectFilter}/>
            <ProjectList projects={projects}/>
        </div>
    )
}

Portfolio.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Portfolio;

