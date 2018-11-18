import React from 'react';

const singleProject = (props) => {


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
            
            return <p>{props.posts[postIndex].title}</p>


        } else {
            return <p>///</p>
        }
    }
    

    //// //// ////
    ////  RETURN 
    ////
    

    return (
        <div>this is some single project of: the 
        {projectContent()}
  
        </div>
    )
};

export default singleProject;

