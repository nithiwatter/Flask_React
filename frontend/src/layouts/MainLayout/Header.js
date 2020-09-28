import React from 'react';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  // useTheme,
  // useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import blue from '@material-ui/core/colors/blue';
import MenuIcon from '@material-ui/icons/Menu';
import { redirectToAuthentication } from '../../actions/userActions';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  buttons: {
    marginLeft: 'auto',
  },
  avatarContainer: {
    marginLeft: 'auto',
  },
  // button: {
  //   color: theme.palette.getContrastText(blue[500]),
  //   backgroundColor: blue[500],
  //   '&:hover': {
  //     backgroundColor: blue[700],
  //   },
  // },
  logIn: {
    marginLeft: theme.spacing(2),
  },
}));

function Header(props) {
  const classes = useStyles();
  const history = useHistory();
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { user, open, handleDrawerOpen, dispatch } = props;

  const handleProtectedActions = (path) => {
    return () => {
      const oldPath = history.location.pathname + history.location.search;
      // set the current location as previous path
      dispatch(redirectToAuthentication(oldPath));
      history.push(path);
    };
  };

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Anime Database
        </Typography>

        {!user && (
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleProtectedActions('/register')}
            >
              Register
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={clsx(classes.logIn, classes.button)}
              onClick={handleProtectedActions('/login')}
            >
              Log In
            </Button>
          </div>
        )}
        {user && (
          <div className={classes.avatarContainer}>
            <Avatar>{user.email[0].toUpperCase()}</Avatar>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.userData.user,
  };
};

export default connect(mapStateToProps)(Header);
