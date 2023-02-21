// import { Component } from "react";
// import React from "react";
// import './Modal.css';
// import ContactsForm from "../ContactForm/ContactsForm";

// class Modal extends Component{
//     state = {
//         visible:false
//     };


//     handleCancel = e => {
//         console.log(e);
//         this.setState({
//             visible: false,
//         });
//     };



//     handleAddContact = (newContact) => 
//     this.setState(({contacts}) => ({
//     contacts: [...contacts, newContact],
//   }))

//   handleCheckUniqueContact = (name) => {
//     const {contacts} = this.state;

//     const isExistContact = !!contacts.find(contact => contact.name === name)

//     isExistContact && alert("Contact is already exist")

//     return !isExistContact;
//   }
//     render(){

//         return(
//             <div className="modal">
//                 {/* <button type='primary' onClick={this.showModal}>Open</button> */}
//                 <ContactsForm onAdd={this.handleAddContact} onCheckUnique={this.handleCheckUniqueContact}/>
//             </div>
//         )
//     }
// }

// export default Modal;