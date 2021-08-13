import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import get from 'lodash/get'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    background: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
  },
  appBar: {
    position: 'fixed',
    zIndex: theme.zIndex.drawer - 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // background: "#3C3D41",
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: '#fff',
    boxShadow: 'none',
  },
  profile: {
    fontSize: '13px',
    color: '#263245',
    textAlign: 'left',
    marginLeft: '10px',
    maxWidth: '100px',
    minWidth: '50px',
  },
  iconButton: {
    borderRadius: '0%',
  },
  changePass: {
    '&:hover': {
      color: "rgba(0, 0, 0, 0.87)",
      textDecoration: "none"
    },
    color: "rgba(0, 0, 0, 0.87)"
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const { open, handleDrawerOpen, user, logOut } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-search-account-menu';
  const userData = get(props,'user.user');
  const handleMenuClose = () => {
    setAnchorEl(null);
    // handleMobileMenuClose();
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => logOut()}>Logout</MenuItem>
    </Menu>
  );

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="absolute" className={clsx(classes.appBar)} title="img">
      <Toolbar className={classes.toolbar}>
        
        <div className={classes.searchBar}></div>

        <div className={classes.actionBar}>
          
          <IconButton
            // edge="end"
            className={classes.iconButton}
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="#556080"
          >
            <AccountCircle />
            <span className={classes.profile}>{userData?userData.first_name : "guest"}</span>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
}
