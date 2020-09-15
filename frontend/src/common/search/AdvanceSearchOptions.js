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
  makeStyles,
} from '@material-ui/core';
import SimpleDropDown from './SimpleDropDown';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  container: {
    display: 'flex',
  },
  labelContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    width: '100%',
    height: 400,
  },
  selectContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  selectTitle: {
    fontWeight: 700,
  },
}));

const AdvanceSearchOptions = (props) => {
  const classes = useStyles();
  const { formObj, values, handleChange: handleDropDownChange } = props;
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
        <div className={classes.container}>
          <TableContainer component={Paper}>
            <Table className={classes.table} size="small">
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" className={classes.selectTitle}>
                      Select Anime Type:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <div className={classes.selectContainer}>
                      <SimpleDropDown
                        value={values.animeType}
                        valueType="animeType"
                        valueOptions={formObj.animeType}
                        handleDropDownChange={handleDropDownChange}
                      ></SimpleDropDown>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" className={classes.selectTitle}>
                      Select Anime Status:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <div className={classes.selectContainer}>
                      <SimpleDropDown
                        value={values.animeStatus}
                        valueType="animeStatus"
                        valueOptions={formObj.animeStatus}
                        handleDropDownChange={handleDropDownChange}
                      ></SimpleDropDown>
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Typography variant="body2" className={classes.selectTitle}>
                      Select Anime Producer:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <div className={classes.selectContainer}>
                      <SimpleDropDown
                        value={values.animeProducer}
                        valueType="animeProducer"
                        valueOptions={formObj.animeProducer}
                        handleDropDownChange={handleDropDownChange}
                      ></SimpleDropDown>
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Collapse>
    </div>
  );
};

export default AdvanceSearchOptions;
