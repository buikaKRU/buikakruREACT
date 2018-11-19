import React from 'react';
import './SingleProject.scss';
import {NavLink} from 'react-router-dom';

import SingleProjectImage from '../../containers/SingleProjectImage/SingleProjectImage';

const singleProject = (props) => {

    window.scrollTo(0, 0);


    

    //// //// ////
    ////  PREPARE SINGLE PROJECT CONTENT 
    ////
    
    const projectContent = () => {
        if (props.posts.length > 0) {

            const postIndex = props.posts.findIndex(element => {
                return element.titleID === props.match.params.id
            });

        
            const post = props.posts[postIndex];
            props.title(`buikaKRU: ${post.title}`);

            console.log('props.posts = ', props.posts);
            
            console.log('post = ', post);
            console.log('postIdex = ', postIndex);
            


            //Last images
            var images = [];
            for (var i=2; i<post.images.length; i++){  
                images.push(<SingleProjectImage key={i} image={post.images[i]}/> )         
            }


            //Description
            var description = (type) => {
                if (post[type] !== ""){
                    return (
                        <>
                            <p>{type}:</p>
                            <span dangerouslySetInnerHTML={{__html: post[type]}}></span>
                        </>
                    )
                } else {
                    return null;
                }
            }

            //Posts navigation
            let prevPost = postIndex === 0 ? props.posts.length - 1 : postIndex - 1; 
            let nextPost = postIndex === props.posts.length - 1 ? 0 : postIndex + 1; 
            
            return (
                <>
                    <div className='singleProject'>
                        <SingleProjectImage image={post.images[0]}/>
                        <div className='projectDescriptionContainer'>
                            <div className='projectDescription'>
                                <h1>{post.title}</h1>
                                {description('colaboration')}
                                {description('description')}

                            </div>
                            <SingleProjectImage image={post.images[1]}/>
                        </div>
                        {images}
                    </div>

                    <nav className="postNavigation">
                        <NavLink 
                            to={props.posts[prevPost].titleID}
                            className="prevButton">
                                <span >&#60; &#60;&nbsp;&nbsp;</span>
                                <span className="postNavigationCaption"> previous project</span>
                        </NavLink>

                        <NavLink 
                            to={props.posts[nextPost].titleID}
                            className="nextButton">
                            <span className="postNavigationCaption">next project </span>
                            <span>&nbsp;&nbsp;&#62; &#62;</span>
                        </NavLink>
                    </nav>
                </>

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

