import React from 'react';
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const SmallAccountMenu = (props) => {
  //   const classes = useStyles();
  const { open, anchorRef, handleClose } = props;

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      role={undefined}
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin: placement === 'bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default SmallAccountMenu;
