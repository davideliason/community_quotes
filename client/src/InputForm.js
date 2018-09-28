import React, { Component } from 'react';

class InputForm extends Component {

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

    fetch('/newQuote', {
      method : 'POST',
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
               },
      mode: "cors",
      body: JSON.stringify(newQuote)
        })
            .then(response => response.json() )
            .then(newQuote => console.log("new quote saved" + newQuote))
            .catch(error => console.log(error));

      this.setState({
              name: "",
              quote: ""
            });
    }

  render() {
    return (
      <div>
        <form action="/newQuote" method="POST" onSubmit={this.handleSubmit}>
           <input
                type="text"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            <input
                type="text"
                placeholder="quote"
                value={this.state.quote}
                onChange={this.handQuoteChange}
            />
          <button type='submit'>save</button>
         </form>
      </div>
    );
  }

}


export default InputForm;


  