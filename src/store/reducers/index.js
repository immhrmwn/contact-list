const initialState = {
  contact: [],
  errors: [],
  loading: false
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CONTACT':
      return {
        ...state,
        contact: action.payload,
        loading: false
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    case 'ERROR_FETCH_CONTACT':
      return {
        ...state,
        errors: state.errors.concat(action.payload),
        loading: false
      }
    default:
      return state
  }
}

export default reducer
