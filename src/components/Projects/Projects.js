import React from 'react';
import './Projects.scss';

import Project from '../../containers/Project/Project'


const projects = (props) => {
//// //// ////
////  DISPLAYS PROJECTS THUMBNAILS ON HOME-PAGE 
////
// gets api data from the main app


    window.scrollTo(0, 0);
    props.title('buikaKRU: projects')

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