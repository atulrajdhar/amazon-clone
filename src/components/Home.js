import React from 'react';

import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_1500x600._CB431281464_.jpg"
                alt=""
            />
            <div className="home__row">
                <Product
                    id="1600490069"
                    title="Learning from Data"
                    price={3537.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
                />

                    <Product
                    id="1600490069"
                    title="Learning from Data"
                    price={3537.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="1600490069"
                    title="Learning from Data"
                    price={3537.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
                />

                    <Product
                    id="1600490069"
                    title="Learning from Data"
                    price={3537.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
                />

                <Product
                    id="1600490069"
                    title="Learning from Data"
                    price={3537.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
                />
            </div>
            
            <div className="home__row">
                <Product
                    id="1600490069"
                    title="Learning from Data"
                    price={3537.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home;