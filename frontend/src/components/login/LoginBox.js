import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as Yup from "yup";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Container,
  Typography,
  LinearProgress,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { loginSuccess, loginFailure } from "../../actions/userActions";
import { openSnackbarExternal } from "../../common/snackbar/Notifier";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overallContainer: {
    border: "2px solid",
    borderColor: theme.palette.primary.dark,
    outline: "10px solid",
    outlineColor: theme.palette.primary.light,
    padding: theme.spacing(4),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  catImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    maxHeight: "400px",
  },
  loliImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    maxHeight: "400px",
    zIndex: -1,
  },
}));

const LoginBox = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img alt="" src="/shinobu.png" className={classes.loliImage}></img>
      <img alt="" src="/catgirl.png" className={classes.catImage}></img>
      <div className={classes.overallContainer}>
        <Container component="div" maxWidth="xs">
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Formik
              initialValues={{
                email: "",
                password: "",
                rememberMe: false,
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const user = {
                    email: values.email,
                    password: values.password,
                  };
                  const { data } = await axios.post("/api/user/login", user);
                  // artificially generate some timeout for loading bar
                  await new Promise((resolve) => {
                    setTimeout(() => {
                      // setSubmitting(false);
                      resolve();
                    }, 500);
                  });

                  // update the store with this new user
                  props.dispatch(loginSuccess(data));

                  // if rememberMe is true, set the jwt token into local storage
                  if (values.rememberMe)
                    localStorage.setItem("jwt", data.access_token);

                  openSnackbarExternal({
                    severity: "success",
                    message: "Logged in successfully",
                  });
                  // push history to previous page?
                } catch (err) {
                  // clear the user store
                  props.dispatch(loginFailure());
                  setSubmitting(false);
                  openSnackbarExternal({
                    severity: "error",
                    message: err.response.data.message,
                  });
                }
              }}
            >
              {({ submitForm, isSubmitting, values, setFieldValue }) => (
                <Form className={classes.form}>
                  <Field
                    component={TextField}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                  <Field
                    component={TextField}
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
                  {isSubmitting && <LinearProgress />}
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={values.rememberMe}
                        onClick={() =>
                          setFieldValue("rememberMe", !values.rememberMe)
                        }
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                  <Button
                    onClick={submitForm}
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Log in
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link
                        component={RouterLink}
                        to="/register"
                        variant="body2"
                      >
                        {"Don't have an account? Register"}
                      </Link>
                    </Grid>
                  </Grid>
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link
                        component={RouterLink}
                        to="/topAnime"
                        variant="body2"
                      >
                        {"Back to main page"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default connect()(LoginBox);
