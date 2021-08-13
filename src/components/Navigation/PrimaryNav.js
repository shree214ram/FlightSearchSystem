import React from 'react';
import { Link } from 'react-router-dom';
import PeopleIcon from '@material-ui/icons/People';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import IconExpandLess from '@material-ui/icons/ExpandLess';
import IconExpandMore from '@material-ui/icons/ExpandMore';
import { useLocation } from 'react-router-dom';
import { RoutesForNav } from '../../constants/routes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    color: '#6c7aa2',
  },
  appMenu: {
    color: '#fff',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    height: '100vh',
    overflow: 'auto',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.04)',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: '100%',
  },
  link: {
    backgroundColor: '#0a1528',
    color: '#6c7aa2;',
    '& > *': {
      textDecoration: 'none',
      color: '#6c7aa2;',
      backgroundColor: '#0a1528',
    },
  },
  ListItemText: {
    paddingLeft: '60px',
  },
  menuItemIcon: {
    color: '#6c7aa2',
  },
  selected: {
    color: '#fff',
  },
}));

const PrimaryNav = ({  rankID }) => {
  const classes = useStyles();
  const location = useLocation().pathname;

  //flight menu

  const [openFlight, setOpenFlight] = React.useState(
    location === RoutesForNav.flightList
  );

  function handleClickFlight() {
    setOpenFlight(!openFlight);
  }
  return (
    <div>
      {/* flightMenu List*/}
        <List component="nav" className={classes.appMenu} disablePadding>
          <ListItem button className={classes.menuItem} onClick={handleClickFlight}>
            <ListItemIcon className={classes.menuItemIcon}>
              <PeopleIcon
                className={clsx(
                  (
                    location === RoutesForNav.flightList) &&
                  classes.selected
                )}
              />
            </ListItemIcon>
            <ListItemText
              className={clsx(
                location === RoutesForNav.flightList
                  ? classes.selected
                  : classes.link
              )}
            >
              Flights
          </ListItemText>
            {openFlight ? <IconExpandLess /> : <IconExpandMore />}
          </ListItem>
          <Collapse in={openFlight} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" className={classes.link} disablePadding>
              <Link to="/flightList/all">
                <ListItem
                  button
                  title="Flight List"
                  className={clsx(
                    classes.menuItem,
                    (location === RoutesForNav.flightList) &&
                    classes.selected
                  )}
                >
                  <ListItemText
                    className={classes.ListItemText}
                    inset
                    primary="Flight List"
                  />
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </List>
      
    </div>
  );
};

export default PrimaryNav;
