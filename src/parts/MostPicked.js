import React from 'react'
import Button from 'elements/Button'

export default function MostPicked(props) {
  return (
    <section className='container' ref={props.refMostPicked}>
        <h4 className="mb-3">
            Most Picked
        </h4>
        <div className="container-grid">
            {props.data.map((item, index) => {
                return (
                <div key={`most-${index}`} className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
                >
                    <div className="card card-featured">
                        <div className="tag text-white">
                            ${item.price}
                            <span className="font-weight-light text-white">
                               &thinsp; per {item.unit}
                            </span>
                        </div>
                        <figure className="img-wrapper">
                            <img src={item.imageUrl} 
                            alt={item.name} 
                            className="img-cover" />
                        </figure>
                        <div className="meta-wrapper">
                            <Button type='Link' href={`/properties/${item._id}`} className="streched-link d-block text-white">
                                <h5>{item.name}</h5>
                            </Button>
                            <span className='text-white'>
                                {item.city}, {item.country}
                            </span>
                        </div>
                    </div>
                 </div>
                 );
                })
            }
        </div>
    </section>
  )
}
