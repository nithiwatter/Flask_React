import React, { Component } from "react";
import { Formik } from "formik";
import {
  TextField,
  DialogContent,
  DialogActions,
  Button,
  Divider,
  withStyles,
} from "@material-ui/core";
import ReusableSelect from "../form/ReusableSelect";
import ReusableDatePicker from "../form/ReusableDatePicker";
import ReusableNumberInput from "../form/ReusableNumberInput";

const statusOptions = [
  { name: "Watching", value: "watching" },
  { name: "Complete", value: "completed" },
  { name: "On-hold", value: "on-hold" },
  { name: "Dropped", value: "dropped" },
  { name: "Plan to watch", value: "plan to watch" },
];

const scoreOptions = [
  { name: "(10) Masterpiece", value: 10 },
  { name: "(9) Great", value: 9 },
  { name: "(8) Very Good", value: 8 },
  { name: "(7) Good", value: 7 },
  { name: "(6) Fine", value: 6 },
  { name: "(5) Average", value: 5 },
  { name: "(4) Bad", value: 4 },
  { name: "(3) Very Bad", value: 3 },
  { name: "(2) Horrible", value: 2 },
  { name: "(1) Appalling", value: 1 },
];

const rewatchOptions = [
  { name: "Very Low", value: "Very Low" },
  { name: "Low", value: "Low" },
  { name: "Medium", value: "Medium" },
  { name: "High", value: "High" },
  { name: "Very High", value: "Very High" },
];

const styles = (theme) => ({
  paper: {
    padding: theme.spacing(1),
    position: "relative",
  },
  specialInput: {
    marginTop: theme.spacing(2),
  },
  textInput: {
    minWidth: 500,
  },
  button: {
    marginTop: theme.spacing(2),
  },
});

class ReviewContainer extends Component {
  state = {};
  render() {
    const { handleClose, classes } = this.props;
    return (
      <Formik
        initialValues={{
          status: "",
          // need to parse this back to int
          episodesWatched: "",
          score: "",
          startDate: null,
          endDate: null,
          rewatchValue: "",
          // need to parse this back to int
          totalTimesRewatched: "",
          comment: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, setFieldValue, submitForm }) => (
          <React.Fragment>
            <DialogContent>
              <div className={classes.paper}>
                <div>
                  <ReusableSelect
                    options={statusOptions}
                    value={values.status}
                    setFieldValue={setFieldValue}
                    label="Status"
                    required={true}
                    type="status"
                  ></ReusableSelect>
                </div>

                <div>
                  <ReusableSelect
                    options={scoreOptions}
                    value={values.score}
                    setFieldValue={setFieldValue}
                    label="Your Score"
                    required={true}
                    type="score"
                  ></ReusableSelect>
                </div>
                <div className={classes.specialInput}>
                  <ReusableNumberInput
                    value={values.episodesWatched}
                    label="Episodes Watched"
                    type="episodesWatched"
                    setFieldValue={setFieldValue}
                  ></ReusableNumberInput>
                </div>
                <div>
                  <ReusableDatePicker
                    type="startDate"
                    label="Start Date"
                    value={values.startDate}
                    setFieldValue={setFieldValue}
                  ></ReusableDatePicker>
                </div>
                <div>
                  <ReusableDatePicker
                    type="endDate"
                    label="End Date"
                    value={values.endDate}
                    setFieldValue={setFieldValue}
                  ></ReusableDatePicker>
                </div>
                <div>
                  <ReusableSelect
                    options={rewatchOptions}
                    value={values.rewatchValue}
                    setFieldValue={setFieldValue}
                    label="Select Rewatch Value"
                    required={false}
                    type="rewatchValue"
                    minWidth={200}
                  ></ReusableSelect>
                </div>
                <div className={classes.specialInput}>
                  <ReusableNumberInput
                    value={values.totalTimesRewatched}
                    label="Total Times Rewatched"
                    type="totalTimesRewatched"
                    setFieldValue={setFieldValue}
                  ></ReusableNumberInput>
                </div>
                <div className={classes.specialInput}>
                  <TextField
                    label="Enter Your Comments Here"
                    multiline
                    rows={6}
                    value={values.comment}
                    className={classes.textInput}
                    onChange={(e) => setFieldValue("comment", e.target.value)}
                    variant="outlined"
                  />
                </div>
              </div>
            </DialogContent>
            <Divider></Divider>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={submitForm} color="primary">
                Submit
              </Button>
            </DialogActions>
          </React.Fragment>
        )}
      </Formik>
    );
  }
}

export default withStyles(styles)(ReviewContainer);
