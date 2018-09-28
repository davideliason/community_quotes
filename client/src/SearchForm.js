import React, { Component } from 'react';


class SearchForm extends Component {
   constructor(props) {
    super(props);

    this.state = {
      name : '',
      quote : ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handQuoteChange = this.handQuoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

   handleNameChange(e){
    console.log('handleNameChange');
    this.setState({name : e.target.value});
  }

   handQuoteChange(e){
    console.log('handQuoteChange');
    this.setState({quote : e.target.value});
   }

    handleSubmit(e) {
    e.preventDefault();
    let newQuote = {
      name : this.state.name,
      quote : this.state.quote
     };

    fetch('/updateQuote', {
      method : 'POST',
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
               },
      mode: "cors",
      body: JSON.stringify(newQuote)
        })
            .then(response => response.json())
            .then(newQuote => console.log(newQuote))
            .catch(error => console.log(error));
    }


  render() {
    return (
      <div>
        <h3>Search For Quote</h3>
      </div>
    );
  }
}

export default SearchForm;