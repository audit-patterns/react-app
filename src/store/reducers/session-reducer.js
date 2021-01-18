const sessionReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SESSION_INIT':
      return {
        ...state,
        ...action.payload,
        uploadSucess: null,
        uploadInProgress: true,
        uploadProgress: 0,
      }
    case 'SESSION_NEW':
      return {}
    case 'SESSION_SYNC_SUCCESS':
      return {
        ...state,
        ...action.payload,
      }
    case 'UPLOAD_PROGRESS':
      return {
        ...state,
        ...action.payload,
      }
    case 'UPLOAD_SUCCESS':
      return {
        ...state,
        uploadSucess: true,
        uploadInProgress: false,
      }
    case 'UPLOAD_FAILED':
      return {
        ...state,
        uploadSucess: false,
        uploadInProgress: false,
      }
    default:
      return state
  }
}

export default sessionReducer
