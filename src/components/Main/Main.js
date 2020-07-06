import React from 'react';
import Card from "../Card/Card";
import Container from "@material-ui/core/Container"
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    Background : {
        backgroundColor : "red",
        color : "white"
    }
  }))

const Main = () => {
    const classes = useStyles();
    return (
        <main>
            <Container>
                <Card className={ classes.Background } >
                    hahah
                </Card>
            </Container>
        </main>
    )
}

export default Main;