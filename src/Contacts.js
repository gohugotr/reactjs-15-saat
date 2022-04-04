import React, { Component } from 'react';
import List from './List';
import Form from './Form';
import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    return (
      <div>
          <List contacts={this.props.contacts}/>
          <Form addContact={this.props.addContact}/>
      </div>
    )
  }
}
Contacts.propType = {
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func,
};
export default Contacts;