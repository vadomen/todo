import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';

export const Menu = (
  <div>
    {/*
     // @ts-ignore */}
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    {/*
     // @ts-ignore */}
    <ListItem button component={Link} to="/categories">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Categories" />
    </ListItem>
    {/*
     // @ts-ignore */}
    <ListItem button component={Link} to="/tasks">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Tasks" />
    </ListItem>
  </div>
);

// import React from 'react';
// import { MenuList, MenuItem } from '@material-ui/core';
// import { Link } from 'react-router-dom';
//
// const Menu = (
//   <MenuList>
//     {/*
//         // @ts-ignore */}
//     <MenuItem component={Link} to="/">
//       Dashboard
//     </MenuItem>
//     {/*
//         // @ts-ignore */}
//     <MenuItem component={Link} to="/categories">
//       Categories
//     </MenuItem>
//     {/*
//         // @ts-ignore */}
//     <MenuItem component={Link} to="/tasks">
//       Tasks
//     </MenuItem>
//   </MenuList>
// );
//
// export default Menu;
