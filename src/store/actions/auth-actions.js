const signIn = credentials => (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signInWithEmailAndPassword(credentials.email, credentials.password)
    .then(() => dispatch({
      type: 'SIGNIN_OK',
    }))
    .catch(err => dispatch({
      type: 'SIGNIN_ERROR',
      err,
    }))
}

const signOut = () =>  (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: 'SIGNOUT_OK' })
      dispatch({ type: 'SESSION_RESET' })
    })
}

export {
  signIn,
  signOut,
}
