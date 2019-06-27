import { flexMiddle } from './mixins/flexMiddle';

export const homeStyles = () => ({
  main: {
    display: flexMiddle('column'),
    textAlign: 'center',
    marginTop: '26px'
  },
  h2: {
    color: "lightcoral",
    fontWeight: '500',
    marginTop: '4rem',
    fontSize: '4rem',
    lineHeight: '1.5'
  },
  h3: {
    color: 'white',
    fontWeight: '100',
    lineHeight: 1.5,
    fontSize: '1.5rem'
  },
  buttons: {
    display: flexMiddle('row'),
    marginTop: '2rem'
  },
  button: {
    color: 'white',
    fontSize: '32px',
    padding: '1.5rem',
    '&:hover': {
      transform: 'scale(1.2)'
    }
  }
});
