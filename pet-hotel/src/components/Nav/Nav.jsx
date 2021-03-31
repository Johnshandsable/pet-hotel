import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function Nav() {
  return (
    <Menu keepMounted>
      <MenuItem component={Link} to="/dashboard">
        Dashboard
      </MenuItem>
      <MenuItem component={Link} to="/manage">
        Manage Owners
      </MenuItem>
    </Menu>
  );
}
