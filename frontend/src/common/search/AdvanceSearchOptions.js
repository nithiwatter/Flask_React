import React from 'react';
import {
  Paper,
  Collapse,
  FormControlLabel,
  Switch,
  Typography,
  Divider,
  Grid,
  makeStyles,
} from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import SettingsIcon from '@material-ui/icons/Settings';
import SimpleDropDown from './SimpleDropDown';
import SimpleCheckBoxGroup from './SimpleCheckBoxGroup';
import SimpleDatePicker from './SimpleDatePicker';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  container: {
    border: '3px solid',
    borderColor: theme.palette.primary.main,
    borderRadius: 10,
    padding: theme.spacing(2),
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tableContainer: {
    marginBottom: theme.spacing(2),
    height: 'auto',
  },
  titleContainer: {
    display: 'flex',
  },
  divider: {
    marginBottom: theme.spacing(1),
  },
  selectContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  selectTitle: {
    fontWeight: 700,
  },
  title: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const AdvanceSearchOptions = (props) => {
  const classes = useStyles();
  const { formObj, values, handleChange: handleFieldChange } = props;
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className={classes.root}>
      <div className={classes.labelContainer}>
        <FormControlLabel
          control={<Switch checked={checked} onChange={handleChange} />}
          label="Advanced Search"
        />
      </div>
      <Collapse in={checked}>
        <Paper className={classes.container} elevation={0}>
          <div className={classes.tableContainer}>
            <div className={classes.titleContainer}>
              <Typography variant="body1" className={classes.title}>
                Filter
              </Typography>
              <FilterListIcon></FilterListIcon>
            </div>
            <Divider className={classes.divider}></Divider>

            <Grid container>
              <Grid item container xs={6} alignItems="center">
                <Typography variant="body2" className={classes.selectTitle}>
                  Select Anime Type:
                </Typography>
              </Grid>
              <Grid item container xs={6} alignItems="center">
                <SimpleDropDown
                  value={values.animeType}
                  valueType="animeType"
                  valueOptions={formObj.animeType}
                  handleDropDownChange={handleFieldChange}
                ></SimpleDropDown>
              </Grid>

              <Grid item container xs={6} alignItems="center">
                <Typography variant="body2" className={classes.selectTitle}>
                  Select Anime Status:
                </Typography>
              </Grid>
              <Grid item container xs={6} alignItems="center">
                <SimpleDropDown
                  value={values.animeStatus}
                  valueType="animeStatus"
                  valueOptions={formObj.animeStatus}
                  handleDropDownChange={handleFieldChange}
                ></SimpleDropDown>
              </Grid>

              <Grid item container xs={6} alignItems="center">
                <Typography variant="body2" className={classes.selectTitle}>
                  Select Anime Producer:
                </Typography>
              </Grid>
              <Grid item container xs={6} alignItems="center">
                <SimpleDropDown
                  value={values.animeProducer}
                  valueType="animeProducer"
                  valueOptions={formObj.animeProducer}
                  handleDropDownChange={handleFieldChange}
                ></SimpleDropDown>
              </Grid>

              <Grid item container xs={6} alignItems="center">
                <Typography variant="body2" className={classes.selectTitle}>
                  Select Anime Start Date:
                </Typography>
              </Grid>
              <Grid item container xs={6} alignItems="center">
                <SimpleDatePicker
                  name="animeStartDate"
                  value={values.animeStartDate}
                  setDate={handleFieldChange}
                ></SimpleDatePicker>
              </Grid>

              <Grid item container xs={6} alignItems="center">
                <Typography variant="body2" className={classes.selectTitle}>
                  Select Anime End Date:
                </Typography>
              </Grid>
              <Grid item container xs={6} alignItems="center">
                <SimpleDatePicker
                  name="animeEndDate"
                  value={values.animeEndDate}
                  setDate={handleFieldChange}
                ></SimpleDatePicker>
              </Grid>
            </Grid>
          </div>

          <div>
            <div className={classes.titleContainer}>
              <Typography variant="body1" className={classes.title}>
                Genre Filter
              </Typography>
              <SettingsIcon></SettingsIcon>
            </div>
            <Divider className={classes.divider}></Divider>
            <SimpleCheckBoxGroup
              values={values.animeGenre}
              valueType="animeGenre"
              tagCollection={formObj.animeGenre}
              setFieldValue={handleFieldChange}
            ></SimpleCheckBoxGroup>
          </div>
        </Paper>
      </Collapse>
    </div>
  );
};

export default AdvanceSearchOptions;
