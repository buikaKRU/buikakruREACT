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
    axios.get('')
      .then( response => {
        console.log('response = ', response.data);
        console.log(this.prepareData(response.data)) 

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



  
  loaderState = () => {
    console.log('loader state')
    if (this.state.posts.length > 0) {
      console.log('loader opacity 0');
      
      return 0
    } else {
      console.log('loader 1')
      return 1;
    }
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
                <Route path='/contact/' component={ContactPage}/>
                <Route path='/:id' render={(props) => <SingleProject {...props} posts={this.state.posts} />}/>
                <Route render={projects}/>
            </Switch>
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
