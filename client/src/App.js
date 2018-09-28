import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm.js';
import UpdateForm from './UpdateForm.js';
import SearchForm from './SearchForm.js';




class App extends Component {
  state = {quotes: []}

  componentDidMount() {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }

  render() {
    return (
      <div className="App">
        <h1>Quotes</h1>
        {this.state.quotes.map(quote =>
          <div key={quote.id}>{quote.name} : {quote.quote}</div>
        )}
        <InputForm />
        <SearchForm />

        // <UpdateForm />
     
      </div>
    );
  }
}

export default App;