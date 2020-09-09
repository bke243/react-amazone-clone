import React from 'react'

import './Checkout.css';
import SubTotal from './SubTotal/SubTotal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt="promotionImage" className='checkout__ad'/>
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/*Basket Item*/}
                    {/*Basket Item*/}
                    {/*Basket Item*/}
                    {/*Basket Item*/}
                    {/*Basket Item*/}
                </div>
            </div>
            <div className="checkout right">
                {/*Sub total component */}
                <SubTotal/>
            </div>
        </div>
    )
}

export default Checkout;