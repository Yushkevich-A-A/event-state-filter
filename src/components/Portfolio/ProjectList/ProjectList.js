import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

import './ProjectList.css';


function ProjectList(props) {
    const { projects } = props;

    return (
        <ul className='projects-list'>
            {
                projects.map( item => {
                    return (<li className='project-item' key={v4()}>
                                <img className='project-item-img' src={item.img} alt={item.category} />
                            </li>)
                })
            }
        </ul>
    )
}

ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
};

export default ProjectList;

