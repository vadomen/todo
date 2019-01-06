import React from 'react';
import { MenuList, MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Menu = (
  <MenuList>
    {/*
        // @ts-ignore */}
    <MenuItem component={Link} to="/">
      Dashboard
    </MenuItem>
    {/*
        // @ts-ignore */}
    <MenuItem component={Link} to="/categories">
      Categories
    </MenuItem>
    {/*
        // @ts-ignore */}
    <MenuItem component={Link} to="/tasks">
      Tasks
    </MenuItem>
  </MenuList>
);

export default Menu;
