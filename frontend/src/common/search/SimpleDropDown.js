import React from 'react';
import { Select, FormControl, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
}));

const SimpleDropDown = (props) => {
  const classes = useStyles();
  const { value, handleDropDownChange, valueType, valueOptions } = props;

  const handleChange = (event) => {
    handleDropDownChange(valueType, event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange}>
          {valueOptions.map((val) => (
            <MenuItem key={val} value={val}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleDropDown;
