import React, { Component } from 'react';
import Add from './Add.js';
import SearchForm from './SearchForm.js';
import Quotes from './Quotes.js';
import Update from './Update.js';

class App extends Component {
 
   constructor(props) {
    super(props);

    this.state = {
 	  quotes: [] 
    };

    this.getQuotes = this.getQuotes.bind(this);
  }

  getQuotes(){
  	 fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }

  componentDidMount() {
   this.getQuotes();
  }

  render() {
  	return (
  		<div>
             <Add />

  			 <h1>Quotes</h1>
       		 {this.state.quotes.map(quote =>
               <div key={quote._id}> "{quote.quote}" - {quote.name} <Update quote={quote} /></div>
       		 )}
        </div>
      )}
}

export default App;