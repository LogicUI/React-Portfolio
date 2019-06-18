import { black } from '../palettes';
import { flexMiddle } from './mixins/flexMiddle';

const rowMiddle = flexMiddle('row');
const columnMiddle = flexMiddle('column');

export const headerStyles = (theme) => ({
  root: {
    backgroundColor: black
  },

  tool: {
    "@media (min-width:768px)":{
        rowMiddle
    }
  },
  indicator: {
    backgroundColor: 'white',
   }
});
