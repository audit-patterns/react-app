
import React from 'react'

import {
  useSelector,
  useDispatch,
} from 'react-redux'

import {
  useDropzone,
} from 'react-dropzone'

import {
  initSession,
} from '../../store/actions/session-actions'

import {
  Grid,
  Paper,
 } from '@material-ui/core'
 import {
  CloudUploadOutlined,
 } from '@material-ui/icons'

import useStyles from './FileUploadStyles'

const fileExtensions = ['csv', 'xls', 'xlsx']
const fileMimeTypes = {
  'application/vnd.ms-excel': 2,
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': 3,
  'text/csv': 1,
}

const FileUploadSelector = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const session = useSelector(state => state.session)
  console.info(session)

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
      const explodedPath = file.path.split('.')
      const xtsn = explodedPath.pop()
      if (fileExtensions.includes(xtsn)) return dispatch(initSession(file, xtsn))
      const mimeType = fileMimeTypes[file.type]
      if (mimeType) return dispatch(initSession(file, fileExtensions[mimeType - 1]))
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
    </Grid>
  )
}

export default FileUploadSelector
