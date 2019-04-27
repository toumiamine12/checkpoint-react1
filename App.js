import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import logo2 from './logo2.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
         
        </header>
        <p className="para1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem hic minima? Nulla dicta iste voluptatibus
           consequuntur esse obcaecati optio, ab fugiat necessitatibus minus laborum commodi deserunt dolor, ipsam doloribus? </p>
           <p className="para2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus voluptatem hic minima? Nulla dicta iste voluptatibus
           consequuntur esse obcaecati optio, ab fugiat necessitatibus minus laborum commodi deserunt dolor, ipsam doloribus? </p>
      </div>
    );
  }
}

export default App;
