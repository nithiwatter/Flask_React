import React from 'react';
import { makeStyles } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
}));

const SimpleDatePicker = (props) => {
  const classes = useStyles();
  const { value, label, type, setFieldValue } = props;

  const handleDateChange = (date) => {
    setFieldValue(type, date);
  };

  return (
    <div className={classes.root}>
      <KeyboardDatePicker
        clearable
        name={type}
        value={value}
        label={label}
        onChange={handleDateChange}
        format="yyyy/MM/dd"
      />
    </div>
  );
};

export default React.memo(SimpleDatePicker);
