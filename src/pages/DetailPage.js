import BookingForm from 'parts/BookingForm';
import FeaturedImage from 'parts/FeaturedImage';
import Header from 'parts/Header';
import PageDetailDescription from 'parts/PageDetailDescription';
import PageDetailTitle from 'parts/PageDetailTitle';
import React, { Component } from 'react';

import ItemDetails from '../json/itemDetails.json';

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = 'Details Page';
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: 'Home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={ItemDetails} />
        <FeaturedImage data={ItemDetails.imageUrls} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <div data-aos="fade-up" data-aos-duration="1200">
                <PageDetailDescription data={ItemDetails} />
              </div>
            </div>
            <div className="col-5">
              <div>
                <BookingForm itemDetails={ItemDetails} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
