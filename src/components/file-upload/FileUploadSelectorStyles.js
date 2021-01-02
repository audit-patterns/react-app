import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  h1: {
    marginBottom: 0,
  },
  paper: {
    padding: '1rem 2rem 1rem 2rem',
    width: '100%',
    maxWidth: '35rem',
  },
  textField: {
    marginBottom: '1.5rem',
  },
  baseStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out',
  },
  activeStyle: {
    borderColor: '#2196f3',
  },
  acceptStyle: {
    borderColor: '#00e676',
  },
  rejectStyle: {
    borderColor: '#ff1744',
  },
}))
