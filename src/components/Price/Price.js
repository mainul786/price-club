import React from 'react';

import Features from '../Features/Features';

const Price = ({ price }) => {

    const features = price.features;
    console.log(features);
    features.map( feature => console.log(feature))
    return (
        <div className=' bg-blue-400 m-3 p-3 rounded-xl'>
            <div>
                <h1><span className='text-white text-5xl'>{price.price}</span>
                    <span>/month</span>
                </h1>
                <h2 className='text-3xl m-2'>Name: {price.name}</h2>
            </div>
            
               
             {
                features.map((feature, idx) => <Features
                key={idx}
                feature={feature}
                ></Features>)
             }
             <button className='bg-green-500 text-3xl text-white w-full rounded-md py-2 mt-4'>Add To Cart</button>
            </div>
        
    );
};

export default Price;