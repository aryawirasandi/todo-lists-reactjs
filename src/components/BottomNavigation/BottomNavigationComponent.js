import React from "react";
import BottomNavigationAction   from "@material-ui/core/BottomNavigationAction";
import Recent from "@material-ui/icons/Restore";
import Todo from "@material-ui/icons/Notes";
import Create from "@material-ui/icons/Create";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    root : {
        width : 100 + "%",
        position : "absolute",
        bottom : 0,
    }
})


function BottomNavigationComponent(){
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const navs = [
        {
            id : 1,
            path : "/",
            icon : <Recent/>
        },
        {
            id : 2,
            path : "/todo",
            icon : <Todo/>
        },
        {
            id : 3,
            path : "/create",
            icon : <Create/>
        }
    ];
    return(
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue)
            }}
            className={classes.root}
        >
            {navs.map(nav => (
                <Link component={RouterLink} to={nav.path} key={nav.id}>
                    <BottomNavigationAction
                        icon={nav.icon}
                    />
                </Link>
            ))}
        </BottomNavigation>
    )
}

export default BottomNavigationComponent;