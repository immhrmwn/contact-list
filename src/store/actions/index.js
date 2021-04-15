import axios from 'axios'

export const loading = () => {
  return { type: 'LOADING' }
}

export const fetchingContactSuccess = (data) => {
  return { type: 'FETCH_CONTACT' , payload: data}
}

export const fetchingContact = () => {
  return dispatch => {
    dispatch(loading())
    axios({
      method: 'GET',
      url: 'https://simple-contact-crud.herokuapp.com/contact',
    })
      .then(({data}) => {
        dispatch(fetchingContactSuccess(data.data))
      })
      .catch(err => console.log(err))
  }
}

export const addContact = (payload) => {
  return dispatch => {
    dispatch(loading())
    axios({
      method: 'POST',
      url: 'https://simple-contact-crud.herokuapp.com/contact',
      data: payload
    })
      .then(({data}) => {
        dispatch(fetchingContact())
      })
      .catch(err => console.log(err))
  }
}

export const removeContact = (id) => {
  return dispatch => {
    dispatch(loading())
    axios({
      method: 'DELETE',
      url: 'https://simple-contact-crud.herokuapp.com/contact/'+ id,
    })
      .then(({data}) => {
        console.log(data)
        dispatch(fetchingContact())
      })
      .catch(err => console.log(err))
  }
}

export const editContact = (payload, id) => {
  return dispatch => {
    dispatch(loading())
    axios({
      method: 'PUT',
      url: 'https://simple-contact-crud.herokuapp.com/contact/'+ id,
      data: payload
    })
      .then(({data}) => {
        dispatch(fetchingContact())
      })
      .catch(err => console.log(err))
  }
}
