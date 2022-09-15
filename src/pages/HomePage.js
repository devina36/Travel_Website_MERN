import Header from 'parts/Header'
import Hero from 'parts/Hero'

import React, { Component } from 'react'

import homePage from 'json/landingPage.json';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';

export default class HomePage extends Component {
  constructor(props){
    super(props);
    this.refMostPicked = React.createRef();
  }  
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero 
        refMostPicked={this.refMostPicked} 
        data={homePage.hero}/>
        <MostPicked 
        refMostPicked={this.refMostPicked}
        data={homePage.mostPicked}
        />
        <Categories data={homePage.categories}/>
      </>
    )
  }
}

