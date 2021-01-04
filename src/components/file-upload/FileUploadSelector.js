
import React from 'react'

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
 import {
  CloudUploadOutlined,
 } from '@material-ui/icons'

import useStyles from './FileUploadStyles'
import FileUploadProgress from './FileUploadProgress'

const FileUploadSelector = (props) => {
  const classes = useStyles()
  const history = useHistory()

  const {
    acceptedFiles,
    fileRejections,
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ].join(', '),
    maxFiles: 1,
    onDropAccepted: files => files.map(file => {
      console.info(file)
      return history.push('/fiscal-info')
    }),
  })

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ))

  return (
    <Grid container item direction="row" justify="center">
      <Paper className={classes.paper}>
        <h1 className={classes.h1}>Upload employee census spreadsheet file</h1>
        <p>Accepted file types: xls, xlsx, csv</p>
        <section className="container">
          <div className={classes.baseStyle} {...getRootProps()}>
            <input {...getInputProps()} />
            <CloudUploadOutlined className={classes.icon} />
            <p>
              <span style={{ fontWeight: 600 }}>Drag and drop file here</span><br />
              <span>or choose file from your computer</span>
            </p>
          </div>
          <aside>
            <h4>Files</h4>
            <ul>{files}</ul>
          </aside>
        </section>
      </Paper>
      <FileUploadProgress />
    </Grid>
  )
}

export default FileUploadSelector
