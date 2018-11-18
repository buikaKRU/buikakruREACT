import React from 'react';
import './Projects.scss';

import Project from './Project/Project'


const projects = (props) => {

    const projects = props.posts.map(project => {
        return (
            <Project
                key={project.id}
                title={project.titleID}
                featureImages={project.featureImages}
            />
        )
    })

    return(
        <div className="Projects">

            <ul>
                {projects}
            </ul>
            
        </div>
    )
}

export default projects;