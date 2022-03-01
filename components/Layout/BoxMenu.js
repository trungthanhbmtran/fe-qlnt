import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Link from 'next/link';


const BoxMenu = ({path,query,name}) => {
        // console.log('object',query)
    return(
        <>
        <Link href={{pathname: `${path}`, query: query}}  passHref>
                <ListItem button component="a">
                        <ListItemIcon>
                                <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText>{name}</ListItemText>
                </ListItem>
        </Link>
        <Divider/>
   
        </>
    )
  }
  
  export default BoxMenu