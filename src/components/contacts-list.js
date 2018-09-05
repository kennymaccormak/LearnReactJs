import React, { Component } from 'react';
import { Contacts } from '../mock/contacts';

import './contacts-list.css';

class Contact extends Component {
  render() {
    return (
      <li className="contact-list__contact contact list-group-item list-group-item-action">
        <div className="contact__img">
          <img className="contact__img_img" src={"/assets/images/" + this.props.img} alt="img"/>
        </div>
        <div className="contact__info">
          <div className="contact__info_name">{this.props.name}</div>
          <div className="contact__info_phone">{this.props.phone}</div>
        </div>
      </li>
    )
  }
}

export class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayedContacts: Contacts
    };

    this.searchContact = this.searchContact.bind(this);
  }

  searchContact(event) {
    let searchQuery = event.target.value.toLowerCase();
    let result = Contacts.filter(
      (contact) => contact.name
        .toLowerCase()
        .indexOf(searchQuery) !== -1
      ||
        contact.phone
          .toLowerCase()
          .indexOf(searchQuery) !== -1
    );

    this.setState({displayedContacts: result});
  }

  render() {
    return (
      <div className="contacts">
        <input type="text"
               className="form-control"
               placeholder="Find contact"
               onChange={this.searchContact}/>
        <ul className="contact-list list-group">
          {
            this.state.displayedContacts.map((contact) => <Contact key={contact.id}
                                               name={contact.name}
                                               img={contact.img}
                                               phone={contact.phone}/>)
          }
        </ul>
      </div>
    )
  }
}