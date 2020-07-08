import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Recent from '@material-ui/icons/Restore';
import Todo from '@material-ui/icons/Notes';
import Logout from '@material-ui/icons/Create';

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
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
                showLabels
                className={classes.root}
            >
                <BottomNavigationAction label="Recent" icon={<Recent/>}/>
                <BottomNavigationAction label="Todo" icon={<Todo/>}/>
                <BottomNavigationAction label="Create" icon={<Logout/>}/>
            </BottomNavigation>
        </footer>
    )
}

export default Footer