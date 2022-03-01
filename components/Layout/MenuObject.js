import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';

const MenuObject = () => {
return(
    <>
    <ListItemIcon>
        <DashboardIcon />
    </ListItemIcon>
   <ListItemText primary="Tổng quan chung" />
   </>
 )
}
              
export default MenuObject