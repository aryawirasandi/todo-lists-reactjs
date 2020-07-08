import React from 'react';
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
    root : {
        backgroundColor : "#f8f8f8",
        marginTop : 2 + "em",
    },
    minimalHeight : {
        minHeight : props => props.minHeight + "vh",
        width : props => props.width + "%"
    }
})

const CardComponent = props => {
    const data = {
        minHeight : props.minHeight,
        width : props.width,
    }
    const classes = useStyles(data);
    return (
        <Card className={`${classes.root} ${classes.minimalHeight}`}>
            {props.children}
        </Card>
    )
}

export default CardComponent;