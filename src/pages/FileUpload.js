import React from 'react'

import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import FileUploadSelector from '../components/file-upload/FileUploadSelector'
import FileUploadProgress from '../components/file-upload/FileUploadProgress'

const FileUpload = () => {
  const history = useHistory()
  const session = useSelector(state => state.session)
  const { uploadInProgress, uploadSucess } = session
  uploadSucess && history.push('/fiscal-info')
  return (uploadInProgress
    ? <FileUploadProgress />
    : <FileUploadSelector />
  )
}

export default FileUpload
