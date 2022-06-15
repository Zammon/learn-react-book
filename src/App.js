import React,{Component} from "react";
import './App.css'
import AppHeader from "./AppHeader";

function App() {
  return (
    <div className="app">
      <header className="app-header">
      <img className="app-header-logo" src="/images/Logo.png"/>
      </header>
      <div  className="app-grid">
          <AppHeader />
        <div className="Novel-item">
          <img src="/images/Novel_003.jpg"/>
          <h4>Heartstopper</h4>
        </div>
        <div className="Novel-item">
          <img src="/images/Novel_004.jpg"/>
          <h4>Heartstopper</h4>
        </div>
        <div className="Novel-item">
          <img src="/images/Novel_005.jpg"/>
          <h4>Heartstopper</h4>
        </div>
        <div className="Novel-item">
          <img src="/images/Novel_006.jpg"/>
          <h4>Heartstopper</h4>
        </div>
        <div className="Novel-item">
         <img src="/images/Novel_001.jpg"/>
         <h4>Heartstopper</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
