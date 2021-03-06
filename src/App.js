import React, { Component } from 'react';
import './App.scss';
import axios from './axiosGet';
import { Route, Switch } from 'react-router-dom';


import Layout from './components/Layout/Layout'
import Projects from './components/Projects/Projects'
import ContactPage from './components/ContactPage/ContactPage';
import SingleProject from './components/SingleProject/SingleProject';
import Loader from './components/UI/Loader/Loader';

class App extends Component {
//  ////////////////////////////////////////////////////////////////
//  === THE MAIN APP ===   === THE MAIN APP ===   === THE MAIN APP === 
//  === THE MAIN APP ===   === THE MAIN APP ===   === THE MAIN APP === 
//  ////////////////////////////////////////////////////////////////

  


  //  ////////////////////////////////////////////////////////////////
  //  === STATE ===   === STATE ===   === STATE === 
  //  === STATE ===   === STATE ===   === STATE === 
  //  ////////////////////////////////////////////////////////////////

  state = {
    posts: [],
    selectedPost: null,
  }
  
  //  ////////////////////////////////////////////////////////////////
  //  === REACT METHODS ===   === REACT METHODS ===   === REACT METHODS === 
  //  === REACT METHODS ===   === REACT METHODS ===   === REACT METHODS === 
  //  ////////////////////////////////////////////////////////////////
  
  componentDidMount(){
  
    //// //// ////
    ////  GETTIN AND PREPARING API DATA FROM SERVER 
    ////
    
    axios.get('')
      .then( response => {
        this.setState({
          posts: this.prepareData(response.data)
        })
      })
      .catch(error => {
        console.log('error = ', error);
      })
  }

  //  ////////////////////////////////////////////////////////////////
  //  === METHODS ===   === METHODS ===   === METHODS === 
  //  === METHODS ===   === METHODS ===   === METHODS === 
  //  ////////////////////////////////////////////////////////////////
  
  //// //// ////
  ////  MANAGING DATA FROM API 
  ////
  
  prepareData = (response) => {
    const data = response.map(element => {

      const acfKeys = Object.keys(element.acf)

      const featureImages = acfKeys.filter((el, index) => {
          return el.includes('featureImage_')
        })
        .map(el => {
          return {
            name: element.acf[el].title,
            src: element.acf[el].sizes['custom-feature-image']
          }
        })

      let images = acfKeys.filter(el => {
          return el.includes('image_')
        })
        .slice(0,-1)
        .map(el => {
          return {
            name: element.acf[el].title,
            src: element.acf[el].sizes['full-size'],
            alt: element.acf.title_EN,
            width: element.acf[el].sizes['full-size-width'],
            height: element.acf[el].sizes['full-size-height']
          }
        })

      //// //// ////
      ////  CREATING FINAL POST OBJECT 
      ////
      
      const post = {
        id: element.id,
        date: element.date,
        title: element.acf.title_EN,
        titleID: element.acf.title_EN.replace(/\s+/g, '_'),
        description: element.acf.description_EN,
        colaboration:element.acf.colaboration_EN,
        featureImages: featureImages,
        images: images,
      }

      return post
    })
    return data
  }

  //// //// ////
  ////  MANAGING LOADING SCREEN 
  ////
  
  loaderState = () => {
    if (this.state.posts.length > 0) {
      return 0
    } else {
      return 1;
    }
  }

  //// //// ////
  ////  CHANGING META DESCRIPTION 
  ////
  
  changeTitleHandler = (newTitle) => {
    document.title = newTitle;
  }
  
  
  
  
  //  ////////////////////////////////////////////////////////////////
  //  === RENDER ===   === RENDER ===   === RENDER === 
  //  === RENDER ===   === RENDER ===   === RENDER === 
  //  ////////////////////////////////////////////////////////////////
  
  render() {

    //// //// ////
    ////  PREPARE RPOJECTS
    ////
   
    const projects = () => {
        if (this.state.posts.length > 0){
          return (
            <Projects 
            posts={this.state.posts}
            title={this.changeTitleHandler}
            />
          )
        } else {
          return <div>loading</div>
        }
    }

    

    //// //// ////
    ////  RETURN 
    ////
    
    return (
      <div className="App">
        <Layout>
          <Loader opacity={this.loaderState()}/>
          <div>
            <Switch>
                <Route path='/contact/' render={(props) => <ContactPage {...props} title={this.changeTitleHandler}/>}/>
                <Route path='/:id' render={(props) => <SingleProject {...props} posts={this.state.posts} title={this.changeTitleHandler}/>}/>
                <Route render={projects}/>
            </Switch>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
