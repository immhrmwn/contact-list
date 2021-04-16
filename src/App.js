import './App.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { fetchingContact, addContact, editContact } from './store/actions'
import ContactList from './components/ContactList'

function App() {
  const { contact } = useSelector(state => state)
  const dispatch = useDispatch()
  const [newContact, setNewContact] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: ''
  })
  const [newEditContact, setNewEditContact] = useState({
    firstName: '',
    lastName: '',
    age: '',
    photo: '',
    id: ''
  })
  const [isAddForm, setIsAddForm] = useState(false)
  const [isEditForm, setIsEditForm] = useState(false)

  useEffect(() => {
    dispatch(fetchingContact())
    // eslint-disable-next-line
  }, [])

  // show form
  const handleAdd = () => {
    setIsAddForm(true)
    setIsEditForm(false)
  }
  const cancelHandle = () => {
    setIsAddForm(false)
  }
  const editHandle = (payload) => {
    setNewEditContact(payload)
    setIsEditForm(true)
    setIsAddForm(false)
  }
  const cancelEditHandle = () => {
    setIsEditForm(false)
  }

  // handle on Change form
  const handleChange = (event) => {
    let { name, value } = event.target
    const payload = { ...newContact, [name]: value }
    setNewContact(payload)
  }
  const handleEditChange = (event) => {
    let { name, value } = event.target
    const payload = { ...newEditContact, [name]: value }
    setNewEditContact(payload)
  }

  // handle submit form
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addContact(newContact))
    setNewContact({
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
    })
    setIsAddForm(false)
  }
  const handleEditSubmit = (event) => {
    event.preventDefault()
    const { firstName, lastName, age, photo, id } = newEditContact
    const payload = { firstName, lastName, age, photo }
    dispatch(editContact(payload, id))
    setNewEditContact({
      firstName: '',
      lastName: '',
      age: '',
      photo: '',
      id: ''
    })
    setIsEditForm(false)
  }

  return (
    <div className="App">
      <div className="header">
        <h1>My Contact</h1>
        {
          !isAddForm &&
          <div className="addbutton"
          onClick={handleAdd}
          >
            <span title='add button'><i className="fas fa-plus"></i></span>
          </div>
        }
      </div>
      {
        isAddForm &&
        <form className="addform" onSubmit={handleSubmit} title="form">
          <input type="text" className="form-control" id="firstName"
            name="firstName"
            value={newContact.firstName}
            onChange={handleChange}
            placeholder="first name"
            required
          />
          <input type="text" className="form-control" id="lastName"
            name="lastName"
            value={newContact.lastName}
            onChange={handleChange}
            placeholder="last name"
            required
          /><br/>
          <input type="number" className="form-control" id="age"
            min="1"
            name="age"
            value={newContact.age}
            onChange={handleChange}
            placeholder="age"
            required
          />
          <input type="text" className="form-control" id="photo"
            name="photo"
            value={newContact.photo}
            onChange={handleChange}
            placeholder="photo url"
            required
            /><br/>
          <button type="submit" id="addbtn">Add</button>
          <button type="button" id="cancelbtn" onClick={cancelHandle}>Cancel</button>
        </form>
      }
      { isEditForm &&
        <form className="addform" onSubmit={handleEditSubmit}>
          <input type="text" className="form-control" id="firstName"
            name="firstName"
            value={newEditContact.firstName}
            onChange={handleEditChange}
            placeholder="first name"
            required
          />
          <input type="text" className="form-control" id="lastName"
            name="lastName"
            value={newEditContact.lastName}
            onChange={handleEditChange}
            placeholder="last name"
            required
          /><br/>
          <input type="number" className="form-control" id="age"
            min="1"
            name="age"
            value={newEditContact.age}
            onChange={handleEditChange}
            placeholder="age"
            required
          />
          <input type="text" className="form-control" id="photo"
            name="photo"
            value={newEditContact.photo}
            onChange={handleEditChange}
            placeholder="photo url"
            required
            /><br/>
          <button type="submit" id="addbtn">Update</button>
          <button type="button" id="cancelbtn" onClick={cancelEditHandle}>Cancel</button>
        </form>
      }
      <div className="box">
        {
          contact.map(el => {
            return <ContactList key={el.id} contact={el} editHandleForm={(payload) => editHandle(payload)}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
