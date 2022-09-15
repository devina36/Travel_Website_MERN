import React from 'react'
import heroFrame from 'assets/images/img-hero-frame.jpg';
import hero from 'assets/images/img-hero.jpg';

import cities from 'assets/images/icons/icon-cities.svg';
import traveler from 'assets/images/icons/icon-traveler.svg';
import treasure from 'assets/images/icons/icon-treasure.svg';

import Button from 'elements/Button'

import formatNumber from 'utils/FormatNumber'
export default function Hero(props) {
  function showMostPicked(){
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth"
    });
  }

  return (
    <section className='container pt-4' id='hero'>
      <div className="row align-items-center justify-content-between">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p className="font-weight-light text-gray-500 mb-4" style={{ lineHeight: '170%', width: 335}}>
            We provide what you need to enjoy your holiday with family. Time to make another rmemorable moments.
          </p>
          <Button className='btn px-5 btn-shadow' 
          hasShadow 
          isPrimary 
          onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img 
              width={36} 
              height={36}
              src={traveler} 
              alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}
                <span className="text-gray-500 font-weight-light"
                >
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img 
              width={36} 
              height={36}
              src={treasure} 
              alt={`${props.data.treasures} Treasures`} />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}
                <span className="text-gray-500 font-weight-light"
                >
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto">
              <img 
              width={36} 
              height={36}
              src={cities} 
              alt={`${props.data.cities} Cities`} />
              <h6 className="mt-3">
               {formatNumber(props.data.cities)} 
                <span className="text-gray-500 font-weight-light"
                >
                  Cities
                </span>
              </h6>
            </div>
          </div>
        </div>
        <div className='col-6 ml-auto'>
          <div style={{ width: 520, height: 410}} className="position-relative">
            <img src={hero} alt="hero-img" className="img-fluid position-absolute" style={{ margin: '-40px 0 0 -40px'
            , zIndex: 1 }} />
            <img src={heroFrame} alt="heroframe-img" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0'  }}/>
          </div>
        </div>
      </div>
    </section>
  )
}
