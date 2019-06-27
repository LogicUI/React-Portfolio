import { makeStyles } from '@material-ui/styles';
import background from '../images/background.jpeg';
import { flexMiddle } from '../styles/mixins/flexMiddle';


export const styles = makeStyles({
  '@global': {
    body: {
      margin: 0
    }
  },
  root: {
    height: '100vh',
    background: `linear-gradient(41deg, rgba(61, 49, 74, 0.5) 50%, rgba(104, 71, 86, 0.5) 100%),url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    paddingTop:"3rem",
    display: flexMiddle('column')
  }
});
