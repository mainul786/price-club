import React from 'react';
import Price from '../Price/Price';


const Pricing = () => {
    const pricingOption = [
        { id: 1, name: 'Solid', price: 0.99, features: ['awosome', 'mindBlowing', 'Good'] },
        { id: 2, name: 'Golden', price: 0.79, features: ['Goldenhot', 'GoldenAwosome', 'GoodValue'] },
        { id: 3, name: 'Premium', price: 0.91, features: ['Premium', 'PremiumBlowing', 'PremiumGood'] }
    ]
    return (
        <div>
            <h3 className='text-5xl bg-red-500 p-6 text-white'>Pricing Deals</h3>
            <div className=' grid grid-cols-3 gap-3'>
                {
                    pricingOption.map(price => <Price
                        key={price.id}
                        price={price}
                    ></Price>)
                }
            </div>

        </div>
    );
};

export default Pricing;