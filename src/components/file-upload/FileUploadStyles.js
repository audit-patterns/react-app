import { makeStyles } from '@material-ui/core/styles'

const colors = {
  main: '#b2d4f0',
  background: '#edf4fa',
}

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  h1: {
    marginBottom: 0,
  },
  paper: {
    padding: '1em 2em 1em 2em',
    marginBottom: '1em',
    width: '100%',
    maxWidth: '35em',
  },
  textField: {
    marginBottom: '1.5em',
  },
  icon: {
    color: colors.main,
    height: '2.5em',
    width: '2.5em',
  },
  baseStyle: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: colors.main,
    borderStyle: 'solid',
    backgroundColor: colors.background,
    color: '#000',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer',
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
