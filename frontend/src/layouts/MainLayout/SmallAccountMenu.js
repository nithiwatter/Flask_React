import React from 'react';
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@material-ui/core';

const SmallAccountMenu = (props) => {
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
                <MenuItem onClick={handleClose('Profile')}>Profile</MenuItem>
                <MenuItem onClick={handleClose('My account')}>
                  My account
                </MenuItem>
                <MenuItem onClick={handleClose('Log out')}>Log out</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};

export default SmallAccountMenu;
