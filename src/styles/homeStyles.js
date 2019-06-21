import { flexMiddle } from './mixins/flexMiddle';

export const homeStyles = () => ({
  main: {
    display: flexMiddle('column'),
    textAlign: 'center',
    marginTop: '26px'
  },
  h2: {
    color: 'white'
  },
  h3: {
    color: 'white'
  },
  buttons: {
    display: flexMiddle('column'),
    marginTop: '2rem',
    '@media(min-width:768px)': {
      display: flexMiddle('row')
    }
  },
  button: {
    margin: '10px',
    width: '125px',
    height: '48px',
    fontSize: '1rem'
  }
});
