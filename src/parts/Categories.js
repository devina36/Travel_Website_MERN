import React from 'react'

import Button from 'elements/Button'

export default function Categories(props) {
  return (
    <>
        {props.data.map((items, indexs) => {
            return (
            <section key={`categories-${indexs}`} className='container'>
                <div data-aos="fade-up" data-aos-duration="1200">
                <h4 className='mb-3'>
                    {items.name}
                </h4>
                <div className="container-grid">
                    {items.items.map((item, index)=>{
                        return (
                             <div key={`category-${index}`} className="item column-3 row-1">
                                <div className="card" data-aos="fade-up" data-aos-duration="1200" data-aos-delay={`200`*`${index}`}>
                                    {item.isPopular === true ? 
                                    <div className="tag text-white">
                                        Populer
                                        <span className="font-weight-light text-white">
                                        &thinsp; Choice
                                        </span>
                                    </div> : ''}
                                    <figure className="img-wrapper" style={{ height: 180 }}>
                                        <img src={item.imageUrl} 
                                        alt={item.name} 
                                        className="img-cover" />
                                    </figure>
                                    <div className="meta-wrapper">
                                        <Button href={`/properties/${item._id}`} type='Link' className='streched-link d-block text-gray-900'>
                                            <h5 className='h4'>{item.name}</h5>
                                        </Button>
                                        <span className='text-gray-500'>
                                            {item.city}, {item.country}
                                        </span>
                                    </div>
                                </div>
                             </div>
                            );
                        })
                    }
                </div>
                </div>
            </section>
            );
        })
        }
    </>
  )
}
