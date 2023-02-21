const ContactsListItem = ({id,name,surname,phone,onRemove}) => {
    return <li>
        {name} {surname}: {phone} <button onClick={() => onRemove(id)}>delete</button>
    </li>
}

const ContactsList = ({contacts, onRemove}) => {
    if(contacts.length === 0) return null;
    return (
        <ul>
            {contacts.map(contact => <ContactsListItem {...contact} onRemove={onRemove}/>)}
        </ul>
    )
}

export default ContactsList;