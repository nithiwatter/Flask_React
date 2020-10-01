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
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  Table,
  TableBody,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

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
  tableRoot: {
    marginTop: theme.spacing(2),
  },
  headerCell: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
  },
  imageContainer: {
    flexShrink: 0,
  },
  title: {
    fontWeight: 700,
  },
  textContainer: {
    marginLeft: theme.spacing(2),
  },
  readMore: {
    color: theme.palette.primary.main,
  },
  more: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

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
          <TabPanel value={value} index={0}>
            <TableContainer className={classes.tableRoot}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      classes={{ head: classes.headerCell }}
                    >
                      Title
                      <IconButton size="small" className={classes.more}>
                        <MoreHorizIcon></MoreHorizIcon>
                      </IconButton>
                    </TableCell>

                    <TableCell
                      align="right"
                      classes={{ head: classes.headerCell }}
                    >
                      Score
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                      <div className={classes.titleContainer}>
                        <div className={classes.imageContainer}>
                          <Skeleton variant="rect" width={54} height={74} />
                        </div>

                        <div className={classes.textContainer}>
                          <Typography variant="body2" className={classes.title}>
                            Shingeki no Kyojin Season 3 Part 2
                          </Typography>

                          <Typography variant="body2">
                            Seeking to restore humanity’s diminishing hope, the
                            Survey Corps embark on a mission to retake Wall
                            Maria, where the battle against the merciless
                            "Titans" takes the stage once again. Returning to
                            the...
                          </Typography>
                          <span className={classes.readMore}>Read More</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">9.07</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <div className={classes.titleContainer}>
                        <div className={classes.imageContainer}>
                          <Skeleton variant="rect" width={54} height={74} />
                        </div>

                        <div className={classes.textContainer}>
                          <Typography variant="body2" className={classes.title}>
                            Shingeki no Kyojin Season 3 Part 2
                          </Typography>

                          <Typography variant="body2">
                            Seeking to restore humanity’s diminishing hope, the
                            Survey Corps embark on a mission to retake Wall
                            Maria, where the battle against the merciless
                            "Titans" takes the stage once again. Returning to
                            the...
                          </Typography>
                          <span className={classes.readMore}>Read More</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">9.07</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfileContainer;
