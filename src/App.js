import React, { Component } from 'react';
import './App.css';
import './header.css';
//import './backg.css';
import Header from './components/Header';
import { BrowserRouter as Router } from "react-router-dom";
import Container from "./components/Container"
class App extends Component {
 

  

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Container/>
        </div>
      </Router>
    );
  }
}

export default App;
