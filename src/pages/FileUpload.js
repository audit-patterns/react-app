import React from 'react'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
} from '@material-ui/core'

import FileUploadSelector from '../components/file-upload/FileUploadSelector'

const FileUpload = () => {
  const history = useHistory()
  const handleClick = () => (
    history.push('/fiscal-info')
  )
  return (
    <div>
      <FileUploadSelector />
      <Button color="primary"
        variant="contained"
        onClick={handleClick}>Next</Button>
    </div>
  )
}

export default FileUpload
