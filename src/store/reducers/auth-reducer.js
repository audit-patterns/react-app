const initState = {
  authError: null,
}

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNIN_ERROR':
      return {
        ...state,
        authError: 'auth/sign-in-failed',
      }
    case 'SIGNIN_OK':
      return {
        ...state,
        authError: null,
      }
    case 'SIGNOUT_OK':
      return state
    default:
      return state
  }
}

export default authReducer
