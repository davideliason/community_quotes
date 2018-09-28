import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';

class Add extends Component {

   constructor(props) {
    super(props);

    this.state = {
      name : '',
      quote : '',
      showModal: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handQuoteChange = this.handQuoteChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(){
    this.setState({showModal: true});
  }

  handleCloseModal(){
    this.setState({showModal: false});
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
       <Button bsStyle="success" onClick={this.handleOpenModal}>Add Quote</Button>
         <Modal 
            isOpen={this.state.showModal} 
            contentLabel="name">
           <h3>subtitle</h3>
           <form action="/newQuote" method="POST" onSubmit={this.handleSubmit}>
           <input
                type="text"
                placeholder="enter your name"
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            <input
                type="text"
                placeholder="enter a quote"
                value={this.state.quote}
                onChange={this.handQuoteChange}
            />
          <button type='submit'>save</button>
         </form>
           <button onClick={this.handleCloseModal}>close modal</button>
         </Modal>

        
      </div>
    );
  }

}


export default Add;


  