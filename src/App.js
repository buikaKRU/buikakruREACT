import React, { Component } from 'react';
import './App.scss';
import axios from './axiosGet';
import { Route, Switch } from 'react-router-dom';


import Layout from './components/Layout/Layout'
import Projects from './components/Projects/Projects'
import ContactPage from './components/ContactPage/ContactPage';
import SingleProject from './components/SingleProject/SingleProject'

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
      //   .map(el => {
      //     return acfKeys.findIndex(curKey => {
      //       return curKey === el;
      //     })
      // })

      let images = acfKeys.filter(el => {
          return el.includes('image_')
        })
        .slice(0,-1)
        .map(el => {
          return {
            name: element.acf[el].title,
            src: element.acf[el].sizes['custom-feature-image'],
            alt: element.acf.title_EN,
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

   



    return (
      <div className="App">
        <Layout>
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
