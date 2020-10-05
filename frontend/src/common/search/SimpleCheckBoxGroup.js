import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';

const SimpleCheckBoxGroup = (props) => {
  const { tagCollection, tagId, tagName, valueType, values, setFieldValue } = props;

  const handleChange = (event) => {
    const newValues = { ...values };
    const checked = !newValues[event.target.name];
    if (event.target.name === 'All') {
      // loop over all keys to set the condition
      for (const k in newValues) {
        newValues[k] = checked;
      }
      return setFieldValue(valueType, newValues);
    } else {
      newValues[event.target.name] = checked;
      let allChecked = true;

      for (const k in newValues) {
        if (k === 'All') continue;

        if (!newValues[k]) {
          allChecked = false;
        }
      }
      newValues['All'] = allChecked;
      return setFieldValue(valueType, newValues);
    }
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
