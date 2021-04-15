import './ContactList.css'
import { useDispatch } from 'react-redux'
import { removeContact } from '../store/actions'
function ContactList ({contact, editHandleForm}) {
  const dispatch = useDispatch()

  const editHandle = () => {
    editHandleForm(contact)
  }

  const removeHandle = () => {
    dispatch(removeContact(contact.id))
  }

  return (
    <div className="contact">
      <div>
        <img src={contact.photo} alt="pict" className="photo"/>
      </div>
      <div className="profile">
        <p className="name">{contact.firstName} {contact.lastName}</p>
        <p className="age">{contact.age} years old</p>
      </div>
      <div className="button">
        <span className="editbtn"
          onClick={editHandle}
        ><i className="far fa-edit"></i></span>
        <span className="removebtn"
          onClick={removeHandle}
        ><i className="fas fa-trash"></i></span>
      </div>
    </div>
  )
}

export default ContactList
