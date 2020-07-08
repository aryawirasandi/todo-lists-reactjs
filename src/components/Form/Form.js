import React from "react";
import Card from "../Card/Card";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const cardFormStyle = makeStyles({
    root : {
        fontFamily : "Arial"
    }
})

const TextFieldStyle = makeStyles({
    root : {
        marginBottom : 1 + "rem",
        marginTop : 1 + "rem",
        width : 100 + "%",
    },
})

const wrapperStyle = {
    display : "flex",
    justifyContent : "center"
}

const ButtonStyle= makeStyles({
    root : {
        marginTop : 2 + "rem",
        padding : 15 + "px"
    }
})

const Form = ({todo, todoDescription}) => {
    const cardStyle = cardFormStyle();
    const inputStyle = TextFieldStyle();
    const buttonStyle = ButtonStyle();
    return (
        <div style={wrapperStyle}>
            <Card minHeight={50} width={30} className={cardStyle.root}>
            <Container>
                <form>
                    <div>
                        <TextField id="standard-basic" className={inputStyle.root} placeholder="Tell us your todo list"></TextField>
                    </div>
                    <div>
                        <TextField id="standard-basic" className={inputStyle.root} placeholder="Tell Us About Your Greatest Experience Today"></TextField>
                    </div>
                    <div style={wrapperStyle}>
                    <Button
                        variant="contained" 
                        color="primary"
                        className={buttonStyle.root}
                    >
                        Add A Todo
                    </Button>
                    </div>
                </form>
            </Container>
        </Card>
        </div>
    )
}

export default Form ;