import React from 'react';
import { Menu, MenuItem, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const SmallMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton onClick={handleClick}>
        <MoreVertIcon></MoreVertIcon>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Add to My Favorites</MenuItem>
        <MenuItem onClick={handleClose}>Add to Watch Later</MenuItem>
      </Menu>
    </div>
  );
};

export default SmallMenu;
