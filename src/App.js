import React, { Component } from 'react';
import './App.css';
import DogsList from './components/DogsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <main><DogsList /></main>
        </header>
      </div>
    );
  }
}

export default App;