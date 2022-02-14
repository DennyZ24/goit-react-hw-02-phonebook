import React, { Component } from 'react'
import Section from 'components/Section/Section'
import Phonebook from "components/Phonebook/Phonebook";
import ContactsBook from 'components/ContactsBook/ContactsBook';
import Filter from "components/Filter/Filter";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
    ],
    filter: ''
  }

  addContacts = (contact) => {
    this.state.contacts.find(stateContact => stateContact.name.includes(contact.name)) ?
      window.alert(`${contact.name} уже есть в списке контактов`)
      :
      this.setState(({ contacts }) => (
      {
      contacts: [contact, ...contacts],
    }
    ))
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact=>contact.id !== contactId)
    }))
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    
    return contacts.filter(contact=>contact.name.toLowerCase().includes(normalizedFilter))
  }

  render() {
    const {  filter } = this.state;
    const visibleContact = this.getVisibleContacts();

    return (
      <>
        <Section title='Phonebook'>
          <Phonebook onSubmit ={this.addContacts}  />
        </Section>
          
        <Section title='Contacts'>
          <ContactsBook contacts={visibleContact} onDeleteContact={this.deleteContact} presenceОfontact={this.presenceОfontact}/>
        </Section>

        <Section>
          <Filter value={filter} onChange={this.handleFilter} />
        </Section>
      </>
    )
  }
}

export default App;