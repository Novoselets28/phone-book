import { Component } from "react";

const INITIAL_STATE = {
    name: '',
    surname: '',
    phone: '',
}

class ContactsForm extends Component {
    state= INITIAL_STATE;

    handleChangeForm = ({target}) => {
        const {name, value} = target;
        this.setState({[name]: value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const {name, surname, phone} = this.state;
        const {onAdd} = this.props;

        const isvalidatedForm = this.validateForm();
        if(!isvalidatedForm) return

        onAdd({id: Date.now(), name, surname, phone})
        this.resetForm()
    }

    validateForm = () =>{
        const {name, surname, phone} = this.state;
        const {onCheckUnique} =this.props;
        if(!name || !surname || !phone) {
            alert("Some filed is empty")
            return false
        }

        return onCheckUnique(name)
    }

    resetForm = () => this.setState(INITIAL_STATE);

    render() {
        const {name, surname, phone} = this.state
        return(
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChangeForm}></input>
                <input type="text" name="surname" placeholder="Enter surname" value={surname} onChange={this.handleChangeForm}></input>
                <input type="tel" name="phone" placeholder="Enter phone number" value={phone} onChange={this.handleChangeForm}></input>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}

export default ContactsForm;