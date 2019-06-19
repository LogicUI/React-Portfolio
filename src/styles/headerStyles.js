import { black } from '../palettes';
import { flexMiddle } from './mixins/flexMiddle';

const rowMiddle = flexMiddle('row');
const columnMiddle = flexMiddle('column');

export const headerStyles = () => ({
  root: {
    backgroundColor: black
  },

  tool: {
        display:rowMiddle
    
  },
  indicator: {
    backgroundColor: 'white',
   }
});
