import { flexMiddle } from './mixins/flexMiddle';

const rowMiddle = flexMiddle('row');

export const homeStyles = () => ({
  h2: {
    color: 'white'
  },
  buttons: {
    display: flexMiddle('row')
  },
  button: {
    margin: '5px',
    span: {
      margin: '2px'
    }
  }
});
