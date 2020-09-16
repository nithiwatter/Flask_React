import React from 'react';
import {
  Paper,
  Collapse,
  FormControlLabel,
  Switch,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  Divider,
  makeStyles,
} from '@material-ui/core';
import SimpleDropDown from './SimpleDropDown';
import SimpleCheckBoxGroup from './SimpleCheckBoxGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  container: {
    border: '3px solid',
    borderColor: theme.palette.secondary.main,
    borderRadius: 10,
    padding: theme.spacing(2),
  },

  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  tableContainer: {
    marginBottom: theme.spacing(2),
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
            <Typography variant="body1" className={classes.title}>
              Filter
            </Typography>
            <Divider className={classes.divider}></Divider>
            <TableContainer component={Paper} elevation={0}>
              <Table className={classes.table} size="small">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className={classes.selectTitle}
                      >
                        Select Anime Type:
                      </Typography>
                    </TableCell>
                    <TableCell align="left" width="50%">
                      <div className={classes.selectContainer}>
                        <SimpleDropDown
                          value={values.animeType}
                          valueType="animeType"
                          valueOptions={formObj.animeType}
                          handleDropDownChange={handleFieldChange}
                        ></SimpleDropDown>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className={classes.selectTitle}
                      >
                        Select Anime Status:
                      </Typography>
                    </TableCell>
                    <TableCell align="left" width="50%">
                      <div className={classes.selectContainer}>
                        <SimpleDropDown
                          value={values.animeStatus}
                          valueType="animeStatus"
                          valueOptions={formObj.animeStatus}
                          handleDropDownChange={handleFieldChange}
                        ></SimpleDropDown>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography
                        variant="body2"
                        className={classes.selectTitle}
                      >
                        Select Anime Producer:
                      </Typography>
                    </TableCell>
                    <TableCell align="left" width="50%">
                      <div className={classes.selectContainer}>
                        <SimpleDropDown
                          value={values.animeProducer}
                          valueType="animeProducer"
                          valueOptions={formObj.animeProducer}
                          handleDropDownChange={handleFieldChange}
                        ></SimpleDropDown>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div>
            <Typography variant="body1" className={classes.title}>
              Genre Filter
            </Typography>
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
