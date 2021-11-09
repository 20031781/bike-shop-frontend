"use strict";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"; // per eseguire il routing tra le diverse view
import App from "./App";

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById("root")
);