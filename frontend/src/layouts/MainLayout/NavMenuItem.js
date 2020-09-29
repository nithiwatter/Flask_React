import React from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Collapse,
  makeStyles,
} from "@material-ui/core";
import IconExpandLess from "@material-ui/icons/ExpandLess";
import IconExpandMore from "@material-ui/icons/ExpandMore";

function activeRoute(title, path, location) {
  switch (title) {
    case "Anime":
      return path.includes("/topAnime") || path.includes("/anime");
    case "Manga":
      return path.includes("/topManga") || path.includes("/manga");
    case "Top Anime":
      return path.includes("/topAnime");
    case "Top Manga":
      return path.includes("/topManga");
    case "Search Anime":
      return path.includes("/anime");
    case "Search Manga":
      return path.includes("/manga");
    case "Profile":
    case "My Profile":
      // need location to access query parameters
      return location.pathname + location.search === "/user/profile";
    case "My Favorites":
      return (
        location.pathname + location.search === "/user/profile?tab=favorites"
      );
    case "Watch Later":
      return location.pathname + location.search === "/user/profile?tab=later";
    case "Setting":
      return path.includes("/user/profile/setting");
    default:
      return false;
  }
}

const useStyles = makeStyles((theme) => ({
  primary: {
    color: theme.palette.primary.main,
  },
}));

const NavMenuItem = (props) => {
  const classes = useStyles();
  const match = useRouteMatch();
  const location = useLocation();
  const { page } = props;
  const isExpandable = page.items && page.items.length > 0;
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const NavMenuItemRoot = (
    <ListItem
      button
      key={page.title}
      component={page.href ? Link : null}
      to={page.href || null}
      onClick={handleClick}
      selected={activeRoute(page.title, match.url, location)}
    >
      {page.icon ? (
        <ListItemIcon
          className={page.color === "primary" ? classes.primary : null}
        >
          {page.icon}
        </ListItemIcon>
      ) : null}
      <ListItemText primary={page.title} />
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </ListItem>
  );

  const NavMenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      <List component="div" disablePadding>
        {page.items.map((item) => (
          <NavMenuItem page={item} key={item.title} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <React.Fragment>
      {NavMenuItemRoot}
      {NavMenuItemChildren}
    </React.Fragment>
  );
};

export default NavMenuItem;
