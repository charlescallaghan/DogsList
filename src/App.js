import React, { Component } from 'react';
import './App.css';
import DogsListContainer from './components/DogsListContainer'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'
import { Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <main>
            <Route exact path="/" component={DogsListContainer} />
            <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
          </main>
        </header>
      </div>
    );
  }
}

export default App;