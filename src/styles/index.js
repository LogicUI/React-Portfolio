import { makeStyles } from '@material-ui/styles';
import background from '../images/background.jpeg';
import { flexMiddle } from '../styles/mixins/flexMiddle';

const columnMiddle = flexMiddle('column');

export const styles = makeStyles({
  root: {
    height: '100vh',
    background: `linear-gradient(41deg, rgba(61, 49, 74, 0.5) 0%, rgba(104, 71, 86, 0.5) 100%),url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: flexMiddle('column')
  }
});
