import React from "react";
import ReactDOM from "react-dom";
// import $ from 'jquery';
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import "./css/index.css";


import AnimalGuessingGame from "./AnimalGuessingGame/AnimalGuessingGame";



import * as serviceWorker from "./serviceWorker";

const moduleAppsAllowed = true;
const appsAllowed = {
  sim: true,
  entityApp: true,
  videoSearchApp: true,
  animalGuess: true
};

if (moduleAppsAllowed) {
  ReactDOM.render(appsAllowed.animalGuess && <AnimalGuessingGame />,
    document.getElementById("animal_guess"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
