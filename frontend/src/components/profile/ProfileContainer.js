import React from "react";
import { useLocation, Link } from "react-router-dom";
import queryString from "query-string";
import {
  Grid,
  Typography,
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Button,
  Tabs,
  Tab,
  Paper,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    minWidth: 300,
  },
  media: {
    height: 140,
    backgroundColor: "#212121",
    position: "relative",
  },
  avatar: {
    position: "absolute",
    left: "5%",
    bottom: "0%",
    transform: "translateY(50%)",
    height: 70,
    width: 70,
    fontSize: 30,
    border: "3px solid white",
    backgroundColor: theme.palette.primary.main,
  },
  userName: {
    fontWeight: 700,
    marginTop: theme.spacing(3),
  },
  button: {
    borderRadius: "32px",
    marginTop: theme.spacing(2),
    width: "100%",
    border: "1px solid rgb(235, 236, 237)",
    fontSize: "16px",
    textTransform: "none",
  },
  recButton: {
    borderRadius: "32px",
    marginTop: theme.spacing(2),
    width: "100%",
    border: "1px solid",
    borderColor: theme.palette.primary.light,
    color: theme.palette.primary.main,
    fontSize: "16px",
    textTransform: "none",
  },
  statusText: {
    marginTop: theme.spacing(2),
  },
  recommendation: {
    fontWeight: 700,
  },
  recCard: {
    minWidth: 300,
    marginTop: theme.spacing(4),
  },
}));

const ProfileContainer = () => {
  const classes = useStyles();
  const location = useLocation();
  const parsed = queryString.parse(location.search);

  let value = false;

  if (parsed.tab) {
    if (parsed.tab === "favorites") {
      value = 0;
    } else if (parsed.tab === "later") {
      value = 1;
    }
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={5}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} component="div">
            <Avatar className={classes.avatar}>H</Avatar>
          </CardMedia>
          <CardContent className={classes.content}>
            <Typography variant="h5" className={classes.userName}>
              nithiwatter@gmail.com
            </Typography>
            <Typography variant="body2" className={classes.statusText}>
              Hello there, here is where my status goes...
            </Typography>
            <Button className={classes.button}>Setting</Button>
          </CardContent>
        </Card>
        <Card className={classes.recCard}>
          <CardContent className={classes.content}>
            <Typography variant="h6" className={classes.recommendation}>
              Recommendations
            </Typography>
            <Button className={classes.recButton}>Explore new anime</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={7}>
        <Paper>
          <Tabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab
              label="My Favorites"
              component={Link}
              to={"/user/profile?tab=favorites"}
            />
            <Tab
              label="Watch Later"
              component={Link}
              to={"/user/profile?tab=later"}
            />
          </Tabs>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
