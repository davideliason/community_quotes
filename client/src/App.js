import React, { Component } from 'react';
import './App.css';
import Add from './Add.js';
import UpdateForm from './UpdateForm.js';
import SearchForm from './SearchForm.js';
import Quotes from './Quotes.js';


class App extends Component {
 

  render() {
    return (
      <div className="App">
       
        <Add />
        <Quotes />

      </div>
    );
  }
}

export default App;