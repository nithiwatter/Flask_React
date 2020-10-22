import React from "react";
import axios from "axios";
import * as Yup from "yup";
import { connect } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import {
  Avatar,
  Button,
  Link,
  Grid,
  Container,
  LinearProgress,
} from "@material-ui/core";
import { TextField } from "formik-material-ui";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { registerSuccess, registerFailure } from "../../actions/userActions";
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
  emiliaImage: {
    position: "absolute",
    bottom: 0,
    right: 0,
    maxHeight: "600px",
    zIndex: -1,
  },
  irohaImage: {
    position: "absolute",
    bottom: 0,
    left: "-100px",
    maxHeight: "700px",
    zIndex: -1,
  },
}));

const RegisterBox = (props) => {
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
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string().required("Required"),
              })}
              onSubmit={async (values, { setSubmitting }) => {
                try {
                  const newUser = {
                    email: values.email,
                    password: values.password,
                  };
                  const { data } = await axios.post(
                    "/api/user/register",
                    newUser
                  );
                  // artificially generate some timeout for loading bar
                  await new Promise((resolve) => {
                    setTimeout(() => {
                      // setSubmitting(false);
                      resolve();
                    }, 500);
                  });

                  // update the store with this new user
                  props.dispatch(registerSuccess(data));

                  openSnackbarExternal({
                    severity: "success",
                    message: "Registered successfully",
                  });
                  // push history to previous page?
                } catch (err) {
                  // clear the user store
                  props.dispatch(registerFailure());
                  setSubmitting(false);
                  openSnackbarExternal({
                    severity: "error",
                    message: err.response.data.message,
                  });
                }
              }}
            >
              {({ submitForm, isSubmitting }) => (
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
                  <Button
                    onClick={submitForm}
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
                        {"Already have an account? Log in"}
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

export default connect()(RegisterBox);
