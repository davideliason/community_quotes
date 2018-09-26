import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {quotes: []}

  componentDidMount() {
    fetch('/quotes')
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
      </div>
    );
  }
}

export default App;