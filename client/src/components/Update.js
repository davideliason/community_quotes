import React, { Component } from 'react';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';


class Update extends Component {
   constructor(props) {
    super(props);

    this.state = {
      id : '',
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
      id : this.state.id,
      name : this.state.name,
      quote : this.state.quote
     };

    fetch('/updateQuote', {
      method : 'PUT',
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

    componentDidMount(){
      this.setState({
        id: this.props.quote._id,
        name: this.props.quote.name,
        quote: this.props.quote.quote
      })
    }


  render() {
    return (
      <div>
        <h5>Update</h5>

         <Button bsStyle="success" bsSize="small" onClick={this.handleOpenModal}><span className="glyphicon glyphicon-edit"></span></Button>
          <Modal 
            isOpen={this.state.showModal} 
            contentLabel="name">
           <h3>Update a quote</h3>

           <form action="/updateQuote" onSubmit={this.handleSubmit}>
           <input
                type="text"
                placeholder="enter name"
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            <input
                type="text"
                placeholder="enter new quote"
                value={this.state.quote}
                onChange={this.handQuoteChange}
            />
          <Button bsStyle="info" bsSize="small" type='submit'>save</Button>
         </form>
           <Button bsStyle="warning" bsSize="small" onClick={this.handleCloseModal}>close</Button>
         </Modal>

      </div>
    );
  }
}

export default Update;