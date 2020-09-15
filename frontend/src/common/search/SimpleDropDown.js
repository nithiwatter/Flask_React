import React from 'react';
import { Select, FormControl, MenuItem, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
}));

const SimpleDropDown = () => {
  const classes = useStyles();
  const [filter, setFilter] = React.useState('All');

  const handleChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select value={filter} onChange={handleChange}>
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Anime">Anime</MenuItem>
          <MenuItem value="Manga">Manga</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default SimpleDropDown;
