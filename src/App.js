import React from "react";
import "./Fontawesome";
import Weather from "./Weather"
import PlusCity from "./PlusCity"



import logo from "./img/3.png";
import './App.css';


export default function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="logo"/>
      </header>
        <div className="container">
          <div className="titleSection mb-5">

            <div className="row">
              <div className="col-4">
                <hr/>
                
              </div>
              <div className="col-8">
              </div>
            </div>
            <h1>Check the Weather for different cities in the world!</h1>
            <div className="row">
              <div className="col-6">
                
              </div>
              <div className="col-6">
                <hr/>
              </div>
            </div>
          </div>
          <div className = "weatherSection row">
            <Weather defaultCity="Tokyo"/>
            <PlusCity  defaultCity="Paris"/>
          </div>
          
          <footer className="mt-5">
            <p>
            💻This project was coded by {" "}
            <a href="linkedin.com/in/carolina-domingues" target="_blank">Carolina Domingues</a>
            , and is open-sourced on{" "}
            <a href="https://github.com/carolinapmd/weather-react-app" target="_blank"> GitHub.</a>
            </p>
            <small>
            <a href='https://pngtree.com/free-backgrounds'>Free background photos frompngtree.com</a> | City Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            </small>
                    
          </footer>
      </div>
    </div>
  );
}
