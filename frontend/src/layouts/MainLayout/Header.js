import React from "react";
import clsx from "clsx";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Avatar,
  // useTheme,
  // useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import blue from '@material-ui/core/colors/blue';
import MenuIcon from "@material-ui/icons/Menu";
import SmallAccountMenu from "./SmallAccountMenu";
import SearchIcon from "@material-ui/icons/Search";
import { logout, redirectToAuthentication } from "../../actions/userActions";
import { openSnackbarExternal } from "../../common/snackbar/Notifier";
import { SHOW_SEARCH_OVERLAY } from "../../actionConstants/actionTypes";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  buttons: {
    marginLeft: "auto",
  },
  avatarContainer: {
    marginLeft: "auto",
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
  hide: {
    display: "none",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  search: {
    marginRight: theme.spacing(2),
    color: "white",
  },
}));

function Header(props) {
  const classes = useStyles();
  const history = useHistory();
  // check if we are currently at /anime
  const isAtAnime = history.location.pathname === "/anime" ? true : null;
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const { user, open, handleDrawerOpen, dispatch } = props;
  const [openAccountMenu, setOpenAccountMenu] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleClose = (value) => {
    return (event) => {
      // prevent other actions related to clicking anchorRef to close the menu
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
      // need this for other cases except log out
      setOpenAccountMenu(false);

      // check what kind of menu is pressed
      switch (value) {
        case "Log out":
          // clear it so next time the user needs to log in
          localStorage.removeItem("jwt");
          openSnackbarExternal({
            severity: "success",
            message: "Logged out successfully!",
          });
          return dispatch(logout());
        default:
          return;
      }
    };
  };

  const handleToggle = () => {
    setOpenAccountMenu((prevOpen) => !prevOpen);
  };

  const handleProtectedActions = (path) => {
    return () => {
      // concurrency issue with history object (may get modified first)
      const oldPath = history.location.pathname + history.location.search;
      // set the current location as previous path
      dispatch(redirectToAuthentication(oldPath));
      history.push(path);
    };
  };

  const showSearchOverlay = () => {
    dispatch({ type: SHOW_SEARCH_OVERLAY, payload: null });
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
            {!isAtAnime && (
              <IconButton
                className={classes.search}
                onClick={showSearchOverlay}
              >
                <SearchIcon></SearchIcon>
              </IconButton>
            )}

            <Button
              disableElevation
              variant="contained"
              color="secondary"
              className={classes.button}
              onClick={handleProtectedActions("/register")}
            >
              Register
            </Button>
            <Button
              disableElevation
              variant="contained"
              color="secondary"
              className={clsx(classes.logIn, classes.button)}
              onClick={handleProtectedActions("/login")}
            >
              Log In
            </Button>
          </div>
        )}
        {user && (
          <React.Fragment>
            <div className={classes.avatarContainer}>
              {!isAtAnime && (
                <IconButton
                  className={classes.search}
                  onClick={showSearchOverlay}
                >
                  <SearchIcon></SearchIcon>
                </IconButton>
              )}

              <IconButton ref={anchorRef} onClick={handleToggle} size="small">
                <Avatar className={classes.avatar}>
                  {user.email[0].toUpperCase()}
                </Avatar>
              </IconButton>
            </div>
            <SmallAccountMenu
              open={openAccountMenu}
              anchorRef={anchorRef}
              handleClose={handleClose}
            ></SmallAccountMenu>
          </React.Fragment>
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
