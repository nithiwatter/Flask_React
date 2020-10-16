import React from "react";
import clsx from "clsx";
import {
  CssBaseline,
  Drawer,
  List,
  IconButton,
  Divider,
  makeStyles,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MovieIcon from "@material-ui/icons/Movie";
import PollIcon from "@material-ui/icons/Poll";
import PollTwoToneIcon from "@material-ui/icons/PollTwoTone";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import FindInPageTwoToneIcon from "@material-ui/icons/FindInPageTwoTone";
import RestorePageIcon from "@material-ui/icons/RestorePage";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FaceIcon from "@material-ui/icons/Face";
import FavoriteIcon from "@material-ui/icons/Favorite";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SettingsIcon from "@material-ui/icons/Settings";
import Header from "./Header";
import NavMenuItem from "./NavMenuItem";

//React themes/templates inspired by Material-UI. Released under MIT License

const pages = [
  {
    title: "Anime",
    icon: <MovieIcon />,
    color: "primary",
    items: [
      {
        title: "Top Anime",
        href: "/topAnime",
        icon: <PollIcon />,
      },
      {
        title: "Search Anime",
        href: "/anime",
        icon: <FindInPageIcon />,
      },
    ],
  },
  {
    title: "Manga",
    icon: <MenuBookIcon />,
    color: "primary",
    items: [
      {
        title: "Top Manga",
        href: "/topManga",
        icon: <PollTwoToneIcon />,
      },
      {
        title: "Search Manga",
        href: "/manga",
        icon: <FindInPageTwoToneIcon />,
      },
    ],
  },
  {
    title: "Search History",
    icon: <RestorePageIcon />,
    href: "/searchHistory",
    color: "primary",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    color: "primary",
    items: [
      {
        title: "My Profile",
        href: "/user/profile",
        icon: <FaceIcon />,
      },
      {
        title: "My Favorites",
        href: "/user/profile?tab=favorites",
        icon: <FavoriteIcon />,
      },
      {
        title: "Watch Later",
        href: "/user/profile?tab=later",
        icon: <WatchLaterIcon />,
      },
      {
        title: "Setting",
        href: "/user/profile/setting",
        icon: <SettingsIcon />,
      },
    ],
  },
];

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const SideBar = (props) => {
  const classes = useStyles();
  const { children } = props;
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen}></Header>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {pages.map((page) => (
            <NavMenuItem page={page} key={page.title}></NavMenuItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default SideBar;
