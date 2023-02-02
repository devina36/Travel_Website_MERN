import React, { Component } from 'react';

import homePage from 'json/landingPage.json';

import Header from 'parts/Header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimonial from 'parts/Testimonial';
import Footer from 'parts/Footer';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = 'Staycation | Home';
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={homePage.hero} />
        <MostPicked refMostPicked={this.refMostPicked} data={homePage.mostPicked} />
        <Categories data={homePage.categories} />
        <Testimonial data={homePage.testimonial} />
        <Footer />
      </>
    );
  }
}
