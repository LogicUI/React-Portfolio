import { flexMiddle } from './mixins/flexMiddle';

const flexMidCol = flexMiddle('column');

export const aboutStyles = () => ({
  root: {
    height: '90vh',
    width: '90vw',
    borderRadius: '8px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    textAlign:"center",
  },
  bigAvatar: {
    margin:10,
    width:120,
    height:120
  },
   h2: {
    color: "palevioletred",
    fontWeight: '500',
    marginTop: '4rem',
    fontSize: '4rem',
    lineHeight: '1.5',
    textTransform:"uppercase"
  },
});
