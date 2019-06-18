import { makeStyles } from '@material-ui/styles';
import background from '../images/background.jpeg';

export const styles = makeStyles({
  root: {
    height: '100vh',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover'
  }
});
