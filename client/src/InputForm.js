import React, { Component } from 'react';

class InputForm extends Component {

  handleSubmit = (e) => {
  	e.preventDefault();
  }

  render() {
    return (
      <div>

        <form action="/quote" method="POST">
          <input type="text" placeholder="new name" name="name" />
          <input type="text" placeholder="new quote" name="quote" />
          <button type="submit">Submit</button>
         </form>

      </div>
    );
  }
}

export default InputForm;

  