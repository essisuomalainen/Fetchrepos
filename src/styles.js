import { createUseStyles } from 'react-jss';

export const styles = createUseStyles({
  app: {
    textAlign: 'center',
    width: '100vw',
    height: '100vh',
    paddingBottom: '2rem',
    fontFamily: 'Courier New',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '60vw',
    margin: '10vh auto',
    background: 'linear-gradient(129.35deg, #ff69b4 -50.02%, #663399 100.51%)',
    color: 'white',
    borderRadius: '2rem',
    padding: '2rem',
    fontWeight: 600,
    fontSize: '1.2rem',
    textAlign: 'left',
  },
  h1: {
    fontWeight: 100,
    fontSize: '3rem',
    marginBottom: '5rem',
  },
  buttonsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '30rem',
    margin: 'auto',
  },
  button: {
    borderRadius: '5rem',
    fontWeight: 600,
    fontSize: 13,
    textDecoration: 'none',
    background: 'none',
    width: 180,
    height: '3rem',
    textTransform: 'uppercase',
    display: 'flex',
  },
  button1: {
    extend: 'button',
    backgroundColor: 'white',
    cursor: 'pointer',
    '&:hover': {
      background: 'black',
      color: 'white',
      fill: 'white',
    },
  },
  button2: {
    extend: 'button',
    backgroundColor: 'hotpink',
    cursor: 'pointer',
    color: 'white',
    border: 'none',
    '&:hover': {
      background: 'rebeccapurple',
    },
  },

  /* button p: {
    alignSelf: 'center',
  },
  svg: {
    margin: '1rem',
    alignSelf: 'center',
  },
  test p: {
    marginBottom: '2rem',
  }, */
});
