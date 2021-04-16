import { render, fireEvent } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from './store'

describe('testing app component', () => {
  it('should render app component correctly', () => {
    const { getByText, getByTitle, container } = render (
      <Provider store={store}>
        <App />
      </Provider>
    )
    const title = getByText('My Contact');
    const addButtonForm = getByTitle('add button');

    expect(container.firstChild).toHaveClass('App')
    expect(title).toBeInTheDocument()
    expect(addButtonForm).toBeInTheDocument()
  })

  it('should show add form', () => {
    const { getByTitle } = render (
      <Provider store={store}>
        <App />
      </Provider>
    )
    const addButtonForm = getByTitle('add button');
    
    fireEvent.click(addButtonForm)
    const addForm = getByTitle('form')
    expect(addForm).toBeInTheDocument()
    // expect(addForm).toBeInTheDocument()
  })
})
