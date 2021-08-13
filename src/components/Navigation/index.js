import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import PrimaryNav from './PrimaryNav';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import get from 'lodash/get';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: '0 6px',

    ...theme.mixins.toolbar,
    // color: "#fff",
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    background: '#0a1528',
    color: '#6c7aa2',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    // background: "#676767",
    // color: "#fff",
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
  selected: {
    color: '#ffffff',
  },
  root: {
    color: '#ffffff',
  },
  title: {
    color: '#ffffff',
  },
}));

export default function Navigation({ userData, handleDrawerClose }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const roles_name = get(userData, 'roles.roles_name', 0);
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      classes={{
        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={true}
    >
      <div className={classes.toolbarIcon}>
        <IconButton
          color="#fff"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          className={clsx(classes.menuButton)}
        >
          <MenuIcon className={classes.root} />
        </IconButton>
        {open && (
          <Typography
            component="h1"
            variant="h6"
            color="#f1f5f7"
            noWrap
            className={classes.title}
          >
            Flight Search System
          </Typography>
        )}
      </div>
      <List>
        <PrimaryNav rankID={roles_name} />
      </List>
    </Drawer>
  );
}
