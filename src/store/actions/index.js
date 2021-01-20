import sessionFetch from './session-fetch'
import sessionUpdate from './session-update'

const retrieveAccessToken = (getFirebase) => new Promise((resolve, reject) => {
  const firebase = getFirebase()
  firebase.auth()
    .onAuthStateChanged(user => user
      ? user.getIdToken().then(idToken => resolve(idToken))
      : resolve(null))
})
export { retrieveAccessToken }

const handler = {
  'SESSION/FETCH': sessionFetch,
  'SESSION/UPDATE': sessionUpdate,
}
export default handler
