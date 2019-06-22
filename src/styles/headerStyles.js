import { black } from '../palettes';
import { flexMiddle } from './mixins/flexMiddle';

const rowMiddle = flexMiddle('row');

export const headerStyles = () => ({
  root: {
    backgroundColor: black
  },

  tool: {
    display: rowMiddle
  },
  indicator: {
    backgroundColor: 'white'
  }
});
