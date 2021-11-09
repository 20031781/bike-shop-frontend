"use strict";
import React, {lazy, Suspense} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import "./index.css";

// const Home = lazy(() => import("./components/Home")); warning sull'assegnamento delle promise quindi aggiungo :
const Home = lazy(() => import("./components/Home").then(({default: Home}) => ({default: Home})));
const Store = lazy(() => import("./components/store").then(({default: store}) => ({default: store})));
const ContactUs = lazy(() => import("./components/ContactUs").then(({default: ContactUs}) => ({default: ContactUs})));
const Sell = lazy(() => import("./components/sell").then(({default: sell}) => ({default: sell})));
const Login = lazy(() => import("./components/Login").then(({default: Login}) => ({default: Login})));
const SignUp = lazy(() => import("./components/SignUp").then(({default: SignUp}) => ({default: SignUp})));

function App() {
    return (
        <Router>
            <NavBar/>
            <Footer/>
            <Suspense fallback={<Loading/>}>
                <Switch>
                    {/*Il parametro exact disabilita la corrispondenza parziale */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/store" component={Store}/>
                    <Route path="/contactUs" component={ContactUs}/>
                    <Route path="/sell" component={Sell}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;