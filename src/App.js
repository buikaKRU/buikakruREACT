import React, { Component } from 'react';
import './App.scss';
import axios from './axiosGet'


import Layout from './components/Layout/Layout'

class App extends Component {


  //  ////////////////////////////////////////////////////////////////
  //  === STATE ===   === STATE ===   === STATE === 
  //  === STATE ===   === STATE ===   === STATE === 
  //  ////////////////////////////////////////////////////////////////

  state = {
    posts: [
        {
          id: 1,
          date: 2018,
          titleEN: 'test name',
          descriptionEN: 'test description',
          colaborationEN: 'colaboration',
          featureImages: [
            {
              name: 'image-name',
              src: 'sr path'
            },
          ],
          images: [],
        }
    ],
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
        titleEN: element.acf.title_EN,
        descriptionEN: element.acf.description_EN,
        colaborationEN:element.acf.colaboration_EN,
        keys: acfKeys,
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

    let content = (<div>Children - web content</div>)

    return (
      <div className="App">
        <Layout>
          <div>
            {content}
          </div>
        </Layout>
      </div>
    );
  }
}

export default App;
