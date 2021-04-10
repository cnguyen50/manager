import { EMAIL_CHANGED } from '../actions/types'
const INITIAL_STATE = { email: ''}

export default (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case EMAIL_CHANGED:
      state.email = action.payload
      return { ...state, email: action.payload }
    default:
      return state;
  }
}