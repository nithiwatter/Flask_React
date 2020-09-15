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
  const { value, handleDropDownChange } = props;

  const handleChange = (event) => {
    handleDropDownChange(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select value={value} onChange={handleChange}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Anime">Anime</MenuItem>
          <MenuItem value="Manga">Manga</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleDropDown;
