import React from 'react';
import clsx from 'clsx';
import { Link, useRouteMatch } from 'react-router-dom';
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MovieIcon from '@material-ui/icons/Movie';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import FindInPageIcon from '@material-ui/icons/FindInPage';
import FindInPageTwoToneIcon from '@material-ui/icons/FindInPageTwoTone';
import Header from './Header';

const pages = [
  {
    title: 'Top Anime',
    href: '/topAnime',
    icon: <MovieIcon />,
  },
  {
    title: 'Top Manga',
    href: '/topManga',
    icon: <MenuBookIcon />,
  },
  {
    title: 'Anime Search',
    href: '/anime',
    icon: <FindInPageIcon />,
  },
  {
    title: 'Manga Search',
    href: '/manga',
    icon: <FindInPageTwoToneIcon />,
  },
];

function activeRoute(title, path) {
  switch (title) {
    case 'Top Anime':
      return path.includes('/topAnime');
    case 'Top Manga':
      return path.includes('/topManga');
    case 'Anime Search':
      return path.includes('/anime');
    case 'Manga Search':
      return path.includes('/manga');
    default:
      return false;
  }
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  const match = useRouteMatch();
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
            <ListItem
              button
              key={page.title}
              component={Link}
              to={page.href}
              selected={activeRoute(page.title, match.url)}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.title} />
            </ListItem>
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
