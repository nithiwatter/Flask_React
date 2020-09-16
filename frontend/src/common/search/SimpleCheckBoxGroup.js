import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const SimpleCheckBoxGroup = (props) => {
  const { tagCollection, valueType, values, setFieldValue } = props;

  const handleChange = (event) => {
    const newValues = { ...values };
    newValues[event.target.name] = !newValues[event.target.name];
    setFieldValue(valueType, newValues);
  };

  console.log('render checkbox');

  return (
    <FormGroup row>
      {tagCollection.map((tag) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={values[tag.value]}
              onChange={handleChange}
              name={tag.value}
            />
          }
          label={tag.label}
          key={tag.label}
        />
      ))}
    </FormGroup>
  );
};

export default React.memo(SimpleCheckBoxGroup);
