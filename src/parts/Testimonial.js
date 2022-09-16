import React from 'react'

import testiFrame from 'assets/images/testimonial-landingpages-frame.jpg'

import Star from 'elements/Star'
import Button from "elements/Button";

export default function Testimonial({data}) {
  return (
    <section className='container' style={{ marginTop: 100 }}>
        <div className="row align-items-center">
            <div className="col-auto" style={{ paddingRight: 45 }}>
                <div 
                style={{margin:'40px 0 0 40px'}} 
                className="position-relative testi_img">
                    <img 
                    src={data.imageUrl} alt="hero-img" 
                    className="img-fluid position-absolute" 
                    style={{ zIndex: 1}} 
                    />
                    <img 
                    src={testiFrame} alt="heroframe-img" 
                    className="img-fluid position-absolute" 
                    style={{ margin: '-40px 0 0 -40px'  }}
                    />
                </div>
            </div>
            <div className="col-7">
                <h4 className='mb-5'>{data.name}</h4>
                <Star 
                value={data.rate} 
                width={35} 
                spacing={4} 
                height={35}
                ></Star>
                <h2 
                className='font-weight-light' 
                style={{ lineHeight: 1.5, width: '92%' }}
                >
                    {data.content}
                </h2>
                <span className='text-gray-500'>
                    {data.familyName}, {data.familyOccupation}
                </span>
                <Button 
                className='btn px-5 btn-shadow d-block' 
                style={{ marginTop: 50 }} 
                href={`/testimonial/${data._id}`}
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
