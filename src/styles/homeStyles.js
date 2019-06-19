import { flexMiddle } from './mixins/flexMiddle';

const rowMiddle = flexMiddle('row');

export const homeStyles = () => ({
  h2: {
    color: 'white'
  },
  buttons:{
      display:flexMiddle("row")
  }
});
