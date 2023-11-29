import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import * as ROUTES from '../constant/routes';

const Header = () => {
  return (
    <AppBar sx={{ width: '100%' }} position='static'>
      <Toolbar>
        <Typography
          variant='h6'
          component={Link}
          to={ROUTES.HOME}
          style={{ textDecoration: 'none', color: 'white' }}
        >
          Your Company Name
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography
            variant='h6'
            component={Link}
            to={ROUTES.HOME}
            style={{ marginLeft: 20, textDecoration: 'none', color: 'white' }}
          >
            Home
          </Typography>
          <Typography
            variant='h6'
            component={Link}
            to='/group-chat'
            style={{ marginLeft: 20, textDecoration: 'none', color: 'white' }}
          >
            Group Chat
          </Typography>
          <Typography
            variant='h6'
            component={Link}
            to={ROUTES.INTER_ACTIVE_MODAL}
            style={{ marginLeft: 20, textDecoration: 'none', color: 'white' }}
          >
            Interactive Model
          </Typography>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
