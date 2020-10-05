import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const SimpleCheckBoxGroup = (props) => {
  const { tagCollection, tagId, tagName, valueType, values, setFieldValue } = props;

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
              checked={values[tag[tagName]]}
              onChange={handleChange}
              name={tag[tagName]}
            />
          }
          label={tag[tagName]}
          key={tag[tagId]}
        />
      ))}
    </FormGroup>
  );
};

export default React.memo(SimpleCheckBoxGroup);
