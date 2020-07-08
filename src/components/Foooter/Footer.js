import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Recent from '@material-ui/icons/Restore';
import Todo from '@material-ui/icons/Notes';
import Create from '@material-ui/icons/Create';
import Link from "@material-ui/core/Link";
// react router component

import  {
    BrowserRouter as Router,
    Link as RouterLink
  } from "react-router-dom";
    
const useStyles = makeStyles({
    root : {
        width : 100 + "%",
        position : "absolute",
        bottom : 0,
    }
})



function Footer (props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    return (
        <footer>
           <Router>
           <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                className={classes.root}
            >
                <Link  component={RouterLink} to="/">
                    <BottomNavigationAction  icon={<Recent/>}/>
                </Link>
                <Link  component={RouterLink} to="/todo">
                    <BottomNavigationAction icon={<Todo/>}/>
                </Link>
                <Link  component={RouterLink} to="/create">
                    <BottomNavigationAction icon={<Create/>}/>
                </Link>
            </BottomNavigation>
           </Router>
        </footer>
    )
}

export default Footer