import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overallContainer: {
    border: '2px solid',
    borderColor: theme.palette.primary.dark,
    outline: '10px solid',
    outlineColor: theme.palette.primary.light,
    padding: theme.spacing(4),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  emiliaImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    maxHeight: '600px',
  },
  irohaImage: {
    position: 'absolute',
    bottom: 0,
    left: '-100px',
    maxHeight: '700px',
    zIndex: -1,
  },
}));

const RegisterBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img alt="" src="/iroha.png" className={classes.irohaImage}></img>
      <img alt="" src="/emilia.png" className={classes.emiliaImage}></img>

      <div className={classes.overallContainer}>
        <Container component="div" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link component={RouterLink} to="/login" variant="body2">
                    {'Already have an account? Log in'}
                  </Link>
                </Grid>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link component={RouterLink} to="/topAnime" variant="body2">
                    {'Back to main page'}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default RegisterBox;
