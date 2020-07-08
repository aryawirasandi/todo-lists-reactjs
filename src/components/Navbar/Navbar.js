import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root : {
    flexGrow : 1
  },
  menuButton : {
    marginRight : theme.spacing(2)
  },
  title : {
    flexGrow : 1
  }
}))

function Navbar(props) {
  const classes = useStyles();
  return (
   <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                {props.name}
            </Typography>
        </Toolbar>
      </AppBar>
      
   </div>
  );
}

export default Navbar;
