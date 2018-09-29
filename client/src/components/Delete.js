import React, { Component } from 'react';
import {Button} from 'react-bootstrap';

class Delete extends Component {

   constructor(props) {
     super(props);

     this.state = { id : ''};

    this.onClick = this.onClick.bind(this);
    this.delete = this.delete.bind(this);
  }

 

  componentDidMount(){
    this.setState({
      id: this.props.id
    });
  }

  onClick(e){
     this.delete(this);
    }

 

  delete(e) {
   
    fetch('/quotes/delete/' + this.state.id, { method : 'DELETE' }).then( (response)=>{
      console.log(response);
      window.location.reload();
      });
    }



  render() {
    return (
      <div>
       <h5>Delete</h5>
       <Button bsStyle="danger" bsSize="small" onClick={this.onClick}><span className="glyphicon glyphicon-remove"></span></Button>
      </div>
    );
  }

}


export default Delete;


  