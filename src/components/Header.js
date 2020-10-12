import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import {useStateValue} from './StateProvider';
import { auth } from '../firebase';

import './Header.css';


function Header() {
    const [{basket, user}] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    
    return (
        <nav className="header">
            <Link to="/">
                <img 
                    className="header__logo" 
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
                    alt=""
                />
            </Link>
            
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">
                            Hello, {user ? user.email : "Guest"}
                        </span>
                        <span className="header__optionLineTwo">
                            {user ? "Sign Out" : "Sign In"}
                        </span>
                    </div>
                </Link>

                <Link to="/orders" className="header__link">
                <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">&amp; Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header__link">
                <div className="header__option">
                        <span className="header__optionLineOne">Try</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                <div className="header__option">
                    <div className="header__optionBasket">
                            <ShoppingCartOutlinedIcon />
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                        <span className="header__optionLineTwo">Cart</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Header;
