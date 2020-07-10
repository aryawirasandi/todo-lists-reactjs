import React from 'react';
import Card from "../Card/Card";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
// import { makeStyle } from "@material-ui/core/styles";

const buttonStyle = makeStyles({
    root : {
        marginRight : 1 + "em",
        marginBottom : 1 + "em"
    }
})

const Todo = (props) => {
    const button = buttonStyle();
    return (
        <Card>
            <Container>
                <h1>{props.heading}</h1>
                <p> {props.description}</p>
                <Button 
                variant="contained"
                className={button.root}
                color="secondary"
                >Delete</Button>
                 <Button 
                variant="contained"
                className={button.root}
                color="primary"
                >Update</Button>
                 <Button 
                variant="contained"
                className={button.root}
                >Info</Button>
            </Container>
        </Card>
    )
}

export default Todo;