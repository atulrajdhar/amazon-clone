import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';

import {useStateValue} from './StateProvider';
import { getBasketTotal } from './reducer';
import './Subtotal.css';

function Subtotal() {
    const history = useHistory();
    const [{basket}] = useStateValue();
    
    return (
        <div className="subtotal">
            <div className="subtotal__ad">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                    alt=""
                />

            </div>
            <div className="subtotal__checkout">
                <CurrencyFormat
                    renderText={(value) => (
                        <>
                            <p>
                                Subtotal ({basket.length} items): <strong>{` ${value} `}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" /> This order contains a gift
                            </small>

                        </>
                    )}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix="&#8377;"
                />
                <button onClick={e => history.push('./payment')}>Proceed to Buy</button>
            </div>
        </div>
    );
}

export default Subtotal;