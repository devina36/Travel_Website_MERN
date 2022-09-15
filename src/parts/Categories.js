import React from 'react'

import Button from 'elements/Button'

export default function Categories(props) {
  return (
    <>
        {props.data.map((items, index) => {
            return (
            <section key={`categories-${index}`} className='container'>
                <h4 className='mb-3'>
                    {items.name}
                </h4>
                <div className="container-grid">
                    {items.items.map((item, index)=>{
                        return (
                             <div key={`category-${index}`} className="item column-3 row-1">
                                <div className="card border-none">
                                    {item.isPopular === true ? 
                                    <div className="tag text-white">
                                        Populer
                                        <span className="font-weight-light text-white">
                                        &thinsp; Choice
                                        </span>
                                    </div> : ''}
                                    <figure className="img-wrapper">
                                        <img src={item.imageUrl} 
                                        alt={item.name} 
                                        className="img-cover" />
                                    </figure>
                                    <Button type='Link'>
                                        <h5>{item.name}</h5>
                                    </Button>
                                    <span>
                                        {item.city}, {item.country}
                                    </span>
                                </div>
                             </div>
                            );
                        })
                    }
                </div>
            </section>
            );
        })
        }
    </>
  )
}
