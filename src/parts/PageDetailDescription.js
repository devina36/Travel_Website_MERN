import React from 'react';

function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.length === 0
          ? 'Tidak Ada Feature'
          : data.features.map((feature, index) => {
              return (
                <div key={`feature-${index}`} className="col-3" style={{ marginBottom: 20 }}>
                  <img width="38" className="d-block mb-2" src={feature.imageUrl} alt={feature.name} />{' '}
                  <span>{feature.qty}</span> <span className="text-gray-500 font-weight-light">{feature.name}</span>
                </div>
              );
            })}
      </div>
    </main>
  );
}

export default PageDetailDescription;
