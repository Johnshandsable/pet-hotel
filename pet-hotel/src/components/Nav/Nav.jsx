import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

function Nav() {
  return (
    <div>
      <Button component={Link} to="/dashboard">
        Dashboard
      </Button>
      <Button component={Link} to="/manage">
        Manage Owners
      </Button>
    </div>
  );
}

export default Nav;
