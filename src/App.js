// import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import MyComponent from './components/MyComponent';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello, World!!</h1>
        <MyComponent></MyComponent>
      </div>
    );
  }
}

export default App;
// export default hot(App);
