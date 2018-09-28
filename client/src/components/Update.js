import React, { Component } from 'react';
import Modal from 'react-modal';

class Update extends Component {
   constructor(props) {
    super(props);

    this.state = {
      id : 'id',
      name : 'name',
      quote : 'quote',
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

    // componentDidMount(){
    //   this.setState({
    //     id: this.props._id,
    //     name: this.props.name,
    //     quote: this.props.quote
    //   })
    // }


  render() {
    return (
      <div>
        <h3>Update Quote</h3>
        <p>{this.state.id} : {this.state.name} : {this.state.quote}</p>
      </div>
    );
  }
}

export default Update;