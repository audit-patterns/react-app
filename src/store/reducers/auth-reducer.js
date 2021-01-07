const initState = {
  authError: null,
}

export default (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_ERROR':
      return {
        ...state,
        authError: null,
      }
    case 'SIGNIN_OK':
      return {
        ...state,
        authError: 'auth/sign-in-failed',
      }
    case 'SIGNOUT_OK':
      return state
    default:
      return state
  }
}
