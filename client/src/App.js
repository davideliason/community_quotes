import React, { Component } from 'react';
import './App.css';

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

         <form action="/quote" method="POST">
          <input type="text" placeholder="name" name="name" />
          <input type="text" placeholder="quote" name="quote" />
          <button type="submit">Submit</button>
         </form>
      </div>
    );
  }
}

export default App;