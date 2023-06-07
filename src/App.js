import React, {useEffect} from 'react';
import './App.css';
import Header  from './header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route}
from "react-router-dom";
import Checkout from "./Checkout"; 
import HomePage from "./HomePage";
import Login from "./Login.js";
import {useStateValue} from './StateProvider';
import Payment from "./Payment";
import {auth} from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const promise = loadStripe(
  "pk_test_51NDkPXSBRgpoOKyP6DxTvGtWdPz14jPVbA758tRM8wwu3vi997GG3rLazk0BGzxj8wyDRWDpcT1iE12oXAz1JgSF00EBdQJPsx"
  );



function App() {
  const [{}, dispatch] = useStateValue()

 useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
      <Routes>
      <Route path="/checkout" element={[<Header />,<Checkout/>]}></Route>
      <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment /></Elements>]} ></Route>
       <Route path="/" element={[<Header /> ,<Home />]}></Route>
        <Route path="/login" element={<Login />}> </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App; 
