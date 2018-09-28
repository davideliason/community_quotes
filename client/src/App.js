import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm.js';
import UpdateForm from './UpdateForm.js';
import SearchForm from './SearchForm.js';
import Quotes from './Quotes.js';


class App extends Component {
 

  render() {
    return (
      <div className="App">
       
        <InputForm />
        <Quotes />

      </div>
    );
  }
}

export default App;