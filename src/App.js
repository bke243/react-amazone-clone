import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders/Orders";

const promise = loadStripe(process.env.REACT_APP_STRIPE_API);

function App() {
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                //logOut
                dispatch({
                    type: "SET_USER",
                    user: authUser,
                });
            } else {
                //loginOut
                dispatch({
                    type: "SET_USER",
                    user: null,
                });
            }
        });
    }, []);

    return ( <
        Router >
        <
        div className = "App" >
        <
        Switch >
        <
        Route path = "/orders" >
        <
        Header / >
        <
        Orders / >
        <
        /Route>{" "} <
        Route path = "/login" >
        <
        Login / >
        <
        /Route>{" "} <
        Route path = "/checkout" >
        <
        Header / >
        <
        Checkout / >
        <
        /Route>{" "} <
        Route path = "/payement" >
        <
        Header / >
        <
        Elements stripe = { promise } >
        <
        Payment / >
        <
        /Elements>{" "} <
        /Route>{" "} <
        Route path = "/" >
        <
        Header / >
        <
        Home / >
        <
        /Route>{" "} <
        /Switch>{" "} <
        /div>{" "} <
        /Router>
    );
}

export default App;