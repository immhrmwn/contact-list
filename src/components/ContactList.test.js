import { render } from '@testing-library/react';
import ContactList from './ContactList'
import { Provider } from 'react-redux'
import store from '../store'

describe('testing contactlist component',  () => {
  const contact = { firstName: 'Jajang', lastName: 'Suhendra', age: 30, photo: 'photo.jpg', id: 'asdjbq2-ad82rb'}
  it('should render contact component correctly', () => {
    const { debug, getByTestId, getByTitle } = render (
    <Provider store={store}>
      <ContactList contact={contact}/>
    </Provider>
    )
      const konten = getByTestId("contact")
      const editButton = getByTitle("edit-button")
      const removeButton = getByTitle("remove-button")
      debug(konten)

      expect(konten).toBeInTheDocument()
      expect(editButton).toBeInTheDocument()
      expect(removeButton).toBeInTheDocument()
  })
})