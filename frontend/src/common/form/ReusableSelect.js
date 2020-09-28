import React from 'react';
import {
  FormControl,
  MenuItem,
  InputLabel,
  Select,
  makeStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const ReusableSelect = (props) => {
  const classes = useStyles();
  const {
    options,
    required,
    label,
    type,
    setFieldValue,
    value,
    minWidth,
  } = props;
  const handleChange = (e) => {
    setFieldValue(type, e.target.value);
  };

  return (
    <FormControl
      required={required}
      className={classes.formControl}
      style={minWidth ? { minWidth } : null}
    >
      <InputLabel>{label}</InputLabel>
      <Select value={value} onChange={handleChange}>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ReusableSelect;
