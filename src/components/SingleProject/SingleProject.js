import React from 'react';
import './SingleProject.scss';

import ProjectImage from './ProjectImage/ProjectImage';

const singleProject = (props) => {

    window.scrollTo(0, 0);

    //// //// ////
    ////  PREPARE SINGLE PROJECT CONTENT 
    ////
    
    const projectContent = () => {
        if (props.posts.length > 0) {
            console.log('props.posts from single = ', props.posts);

            const postIndex = props.posts.findIndex(element => {
                return element.titleID === props.match.params.id
            });

            console.log('postIndex = ', postIndex);
            const post = props.posts[postIndex];

            //Last images
            var images = [];
            for (var i=2; i<post.images.length; i++){  
                images.push(<ProjectImage key={i} image={post.images[i]}/> )         
            }


            //Colaboration
            var description = (type) => {
                if (post[type] !== ""){
                    return (
                        <>
                            <p>{type}:</p>
                            <span dangerouslySetInnerHTML={{__html: 
        post[type]}}></span>
                        </>
                    )
                } else {
                    return null;
                }
            }


            return (
                <div className='singleProject'>
                    <ProjectImage image={post.images[0]}/>
                    <div className='projectDescriptionContainer'>
                        <div className='projectDescription'>
                            <h1>{post.title}</h1>
                            {description('colaboration')}
                            {description('description')}

                        </div>
                        <ProjectImage image={post.images[1]}/>
                    </div>

                    {images}
                </div>
            )
        } else {
            return <p>\\\</p>
        }
    }
    

    //// //// ////
    ////  RETURN 
    ////
    

    return (
        <>
            {projectContent()}
        </>

    )
};

export default singleProject;

