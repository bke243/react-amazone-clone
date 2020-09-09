import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './SubTotal.css'
import {useStateValue} from '../../../StateProvider';

function SubTotal() {

    const [{basket}, dispatch ]= useStateValue();
    const basketSubTotal = basket.map(product => product.price).reduce((initialPrice, accPrice) => initialPrice + accPrice, 0 );


    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={ (value) =>(
                    <>
                    <p>Subtotal ({basket.length} items) : <strong>{value}</strong></p>
                    <small className="subtotal__gift"> <input type="checkbox" /> this order contains a gift</small>
                    </>
                )}
                decimalScale={2}
                value={basketSubTotal}  // part of homework 
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}

            />
            <button>Proceed to checkout </button>
        </div>
    )
}

export default SubTotal ;