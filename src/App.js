import './App.css';
import { Component } from 'react';
import ContactsForm from './components/ContactForm/ContactsForm';
import ContactsList from './components/ContactsList/ContactsList';
import Filter from './components/Filter/Filter';


class App extends Component {
  state = {
    contacts: [],
    filter: '',
    isVisibleForm: false,
  }

  setVisibleForm = () => {
    this.setState({
      isVisibleForm: !this.state.isVisibleForm
    });
  };

  handleAddContact = (newContact) => 
    this.setState(({contacts}) => ({
    contacts: [...contacts, newContact],
  }))

  handleCheckUniqueContact = (name) => {
    const {contacts} = this.state;

    const isExistContact = !!contacts.find(contact => contact.name === name)

    isExistContact && alert("Contact is already exist")

    return !isExistContact;
  }

  handleRemoveContact = (id) => this.setState(({contacts}) => ({contacts:contacts.filter((contact) => contact.id !== id)}))

  handleFilterChange = (filter) => this.setState({filter})

  getVisibleContact = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLocaleLowerCase()))
  }



  render() {
    const {filter} = this.state;
    const visibleContact = this.getVisibleContact();


    return (
    <div className='container'>
      <h1>Form Contact</h1>
        <h2>Contacts Filter</h2>
        <Filter filter={filter} onChange={this.handleFilterChange}/>
        <ContactsList contacts={visibleContact} onRemove={this.handleRemoveContact}/>
        <button className='btn btn01' onClick={this.setVisibleForm}> Add </button>
          {this.state.isVisibleForm && (
              <ContactsForm onAdd={this.handleAddContact} onCheckUnique={this.handleCheckUniqueContact} setVisibleForm={this.isVisibleForm}/>
          )}
    </div>
    )
  }
}

export default App;
