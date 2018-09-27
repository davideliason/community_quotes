import React, { Component } from 'react';
import './App.css';
import InputForm from './InputForm.js';


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
        <a href="https://sleepy-sierra-89009.herokuapp.com/api/quotes">API</a>
        {this.state.quotes.map(quote =>
          <div key={quote.id}>{quote.name} : {quote.quote}</div>
        )}
        <InputForm />
     
      </div>
    );
  }
}

export default App;