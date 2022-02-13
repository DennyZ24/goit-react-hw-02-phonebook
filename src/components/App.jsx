import React, { Component } from 'react'
import Section from 'components/Section/Section'
import Phonebook from "components/AddContact/AddContact";
import ContactsBook from 'components/ContactsBook/ContactsBook'

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
  }
  

  addContacts = (contact) => {
    this.setState(({ contacts }) => (
      {
      contacts: [contact, ...contacts],
    }
    ))
  }

  render() {
    return (
      <>
        <Section title='Phonebook'>
          <Phonebook onSubmit ={this.addContacts} />
        </Section>
          
        <Section title='Contacts'>
          <ContactsBook contacts={this.state.contacts}/>
        </Section>
      </>
    )
  }
}

export default App;