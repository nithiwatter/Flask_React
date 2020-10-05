import React from 'react';
import { FormControl, TextField, makeStyles } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
}));

const SimpleAutocomplete = (props) => {
  const classes = useStyles();
  const { valueName, handleDropDownChange, valueType, valueOptions, label } = props;

  const handleChange = (_, newValue) => {
    handleDropDownChange(valueType, newValue);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Autocomplete
          options={valueOptions}
          getOptionLabel={(option) => option[valueName]}
          style={{ width: 300 }}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
        />
      </FormControl>
    </div>
  );
};

// memoize component to increase render performance
export default React.memo(SimpleAutocomplete);
