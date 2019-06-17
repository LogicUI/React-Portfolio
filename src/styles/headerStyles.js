import { black } from '../palettes';
import { flexMiddle } from './mixins/flexMiddle';

const middle = flexMiddle('row');

export const headerStyles = (theme) => ({
  root: {
    backgroundColor: black
  },

  tool: {
    middle
  },
  indicator: {
    backgroundColor: 'white'
  }
});
