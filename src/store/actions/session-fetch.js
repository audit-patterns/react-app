import axios from 'axios'

import backendConfig from '../../config/backend-config'
import { retrieveAccessToken } from './index'

const { sessionService: { baseURL } } = backendConfig

const handler = (sessionId) => async (dispatch, getState, getFirebase) => {
  const token = await retrieveAccessToken(getFirebase)
  try {
    const sessionTrx = await axios({
      url: `${baseURL}/${sessionId}`,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` },
    })
    const { data, status } = sessionTrx
    if (status !== 200) throw new Error()
    dispatch({ type: 'SESSION/SYNC_SUCCESS', payload: data })
  } catch (err) {
    dispatch({ type: 'SESSION/SYNC_FAILED' })
  }
}

export default handler
