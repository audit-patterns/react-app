import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

import backendConfig from '../../config/backend-config'

const {
  sessionService: {
    baseURL,
    operations,
  }
} = backendConfig

const retrieveAccessToken = (firebase) => new Promise((resolve, reject) => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) user.getIdToken().then(idToken => resolve(idToken))
  })
})

const initSession = (file, xtsn) => async (dispatch, getState, getFirebase) => {
  const firebase = getFirebase()
  const token = await retrieveAccessToken(firebase)

  const { sessionCreate: { method, path } } = operations
  try {
    const sessionTrx = await axios({
      baseURL,
      method,
      url: path,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      data: {
        session_id: uuidv4(),
        extension: xtsn,
      },
    })
    const { data } = sessionTrx
    const { uploadURL } = data
    delete data.uploadURL
    dispatch({
      type: 'SESSION_INIT',
      payload: {
        ...data,
        uploadInProgress: true,
      }
    })

    const formData = new FormData()
    formData.append('file', file)
    const uploadTrx = await axios.put(uploadURL, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      onUploadProgress: (event) => {
        const {
          loaded,
          total,
        } = event
        const uploadProgress = Math.round(loaded / total * 100)
        dispatch({
          type: 'UPLOAD_PROGRESS',
          payload: {
            uploadProgress,
          },
        })
      }
    })
    const { status } = uploadTrx
    if (status !== 200) throw new Error('session/upload-failed')
    dispatch({ type: 'UPLOAD_SUCCESS' })
  } catch (err) {
    console.error(err)
    dispatch({ type: 'UPLOAD_FAILED' })
  }
}

export {
  initSession,
}
