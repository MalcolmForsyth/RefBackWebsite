import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Index from "./landing-page/Home.js"
import App from "./App.js";
// import "./styles.css";
console.log(App);
const appRouting = (
    <Router>
        <Routes>
            <Route path="/landing" element={<App/>} />
            <Route path="/" element={<Index />} />
        </Routes>
    </Router>
);

ReactDOM.render(appRouting, document.getElementById("app"));