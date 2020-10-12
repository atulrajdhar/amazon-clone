import React from 'react';

import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

import './Checkout.css';

function Checkout() {
const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__ad">
                    <strong>
                        Pay faster for all your shopping needs
                        <span><strong> with Amazon Pay balance</strong></span>
                    </strong>
                    <br />
                    Get Instant refund on cancellations | Zero payment failures
                </div>

                {basket?.length === 0 ? (
                    <div>
                        <h1 className="checkout__title">
                            Your Amazon Cart is Empty.
                        </h1>
                    </div>
                ) : (
                    <div>
                        <h1 className="checkout__title">
                            Shopping Cart                    
                        </h1>

                        {basket?.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />                    
                        ))}
                    </div>
                )}
            </div>
                {basket?.length > 0 && (
                    <div className="checkout__right">
                        <Subtotal />
                    </div>
                )}
        </div>
    )
}

export default Checkout;
