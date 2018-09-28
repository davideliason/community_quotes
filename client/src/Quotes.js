import React, { Component } from 'react';
 

class Quotes extends Component { 

  constructor(props) {
    super(props);

    this.state = {
 	  quotes: [] 
    };

    // this.handleChange = this.handleChange.bind(this);

}

  componentDidMount() {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(quotes => this.setState({ quotes }));
  }

  render() {
  	return (
  		<div>
  			 <h1>Quotes</h1>
       		 {this.state.quotes.map(quote =>
               <div key={quote.id}>{quote.name} : {quote.quote}</div>
       		 )}
        </div>
      )}
}

export default Quotes;


