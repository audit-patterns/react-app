import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  simpleBackdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  backdropPaper: {
    width: '30em',
    padding: '0.8em',
    fontSize: '1.0em',
  },
  paper: {
    marginBottom: '1.0em',
    width: '100%',
    fontSize: '1.0em',
  },
  section: {
    margin: '',
    padding: '0.8em',
    '&:not(:last-child)': {
      borderBottom: '0.1em solid #9e9e9e',
    },
  },
  subSection: {
    marginLeft: '1.5em',
    paddingTop: '0.4em',
    '&:not(:last-child)': {
      borderBottom: '0.1em solid #9e9e9e',
      paddingBottom: '0.4em',
    },
  },
  issueSubtitle: {
    fontWeight: 600,
  },
}))
