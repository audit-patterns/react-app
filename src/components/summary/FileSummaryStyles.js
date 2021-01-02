import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    marginBottom: '1rem',
    width: '100%',
  },
  section: {
    margin: '',
    padding: '0.8rem',
    '&:not(:last-child)': {
      borderBottom: '0.1rem solid #9e9e9e',
    },
  },
  subSection: {
    marginLeft: '1.5rem',
    paddingTop: '0.4rem',
    '&:not(:last-child)': {
      borderBottom: '0.1rem solid #9e9e9e',
      paddingBottom: '0.4rem',
    },
  }
}))
