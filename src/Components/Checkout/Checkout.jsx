import React from 'react'

import './Checkout.css';
import SubTotal from './SubTotal/SubTotal';
import CheckoutProduct from './CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../../StateProvider';

function Checkout() {

    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423592668_.jpg" alt="promotionImage" className='checkout__ad'/>
                <div>
    <h3>Hello , {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket.map(product => {
                        return <CheckoutProduct {...product}/>;
                    })}
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