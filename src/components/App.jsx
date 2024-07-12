import React, { Component } from 'react';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [
      {
        name: 'Ally',
        number: '453-123-3322',
      },
      {
        name: 'Taylor',
        number: '451-111-3442',
      },
    ],
    name: '',
    number: '',
  };

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  };
  handleChangeNumber = event => {
    this.setState({ number: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { name, number }],
      name: '',
      number: '',
    }));
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form className="formCont" onSubmit={this.handleSubmit}>
          <h2 className="title">Name</h2>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChangeName}
            required
          />
          <h2 className="title">Number</h2>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChangeNumber}
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <div>
          {this.state.contacts.map((contact, index) => (
            <div style={{ display: 'flex' }} key={index}>
              <p style={{ marginRight: '10px' }}>{contact.name}</p>
              <p>{contact.number}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
