import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './p1-main/m1-ui/u1-app/App'
import * as serviceWorker from './serviceWorker'
import HW2 from "./p2-homeworks/h2/HW2";
import HW1 from "./p2-homeworks/h1/HW1";
import HW3 from "./p2-homeworks/h3/HW3";
import HW4 from "./p2-homeworks/h4/HW4";

ReactDOM.render(
    <React.StrictMode>
        <HW1/>
        <HW2/>
        <HW3/>
        <HW4/>
    </React.StrictMode>,
    document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
