import React, { Component } from 'react';

class InputForm extends Component {

   constructor(props) {
    super(props);

    this.state = {
      name : 'blue2',
      quote : 'bluequote2'
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

    fetch('/quote', {
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
        {this.state.name} is name
        <form action="/quote" method="POST" onSubmit={this.handleSubmit}>
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
        }

      </div>
    );
  } 

}


export default InputForm;


  