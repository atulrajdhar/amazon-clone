import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Payment from './components/Payment';
import Orders from './components/Orders';

import { useStateValue } from './components/StateProvider';

import { auth } from './firebase';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(
  "pk_test_51HOowFDKfvO7036WdPRE0o2jx4pymUabMdrhAvDQt9vvM32bQX6JWxGA1Lb5oXzJmJ26twWPsi4pGRne0lsFUsQI001lI52MR3"
);

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    
    auth.onAuthStateChanged(authUser => {
      console.log('The user is: ', authUser);

      if (authUser) {
        // user just / already logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        })

      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
