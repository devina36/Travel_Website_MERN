import React from 'react'

import testiFrame from 'assets/images/testimonial-landingpages-frame.jpg'

import star from 'assets/images/icons/star.svg'
import Button from "elements/Button";

export default function Testimonial(props) {
  return (
    <section className='container' style={{ marginTop: 100 }}>
        <div className="row justify-content-between align-items-center">
            <div className="col-5">
                <div style={{ width: 365, height: 501}} className="position-relative">
                    <img src={props.data.imageUrl} alt="hero-img" className="img-fluid position-absolute" style={{ zIndex: 1, margin:'40px 0 0 40px' }} />
                    <img src={testiFrame} alt="heroframe-img" className="img-fluid position-absolute" style={{ margin: '0 -15px -15px 0'  }}/>
                </div>
            </div>
            <div className="col-7 pl-0">
                <h4 className='mb-5'>{props.data.name}</h4>
                <div className="d-flex">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                </div>
                <h2 className='font-weight-light' style={{ lineHeight: 1.5, width: '90%' }}>{props.data.content}</h2>
                <span className='text-gray-500'>
                    {props.data.familyName}, {props.data.familyOccupation}
                </span>
                <Button className='btn px-5 btn-shadow d-block' style={{ marginTop: 60 }} 
                hasShadow 
                isPrimary
                >
                    Read Their Story
                </Button>
            </div>
        </div>
    </section>
  )
}
