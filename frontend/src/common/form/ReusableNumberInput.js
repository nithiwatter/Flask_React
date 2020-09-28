import React from 'react';
import { TextField } from '@material-ui/core';

const ReusableNumberInput = (props) => {
  const { label, value, setFieldValue, type } = props;

  const handleChange = (e) => {
    setFieldValue(type, e.target.value);
  };

  return (
    <TextField
      label={label}
      type="number"
      value={value}
      InputLabelProps={{
        shrink: true,
      }}
      variant="outlined"
      onChange={handleChange}
    />
  );
};

export default ReusableNumberInput;
