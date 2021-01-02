
import React, { useMemo } from 'react'

import {
  useDropzone,
} from 'react-dropzone'

import {
  useHistory,
} from 'react-router-dom'

import {
  Button,
  Grid,
  Paper,
  TextField,
 } from '@material-ui/core'

import useStyles from './FileUploadSelectorStyles'

const FileUploadSelector = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone()

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  const dropzoneStyle = useMemo(() => {

  })

  const handleSignInSubmit = () => {
    history.push('/fiscal-info')
  }
  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Upload employee census spreadsheet file</h1>
        <p>Accepted file types: xls, xlsx, csv</p>
        <section className="container">
          <div {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </section>
      </Paper>
    </Grid>
  )
}

export default FileUploadSelector
