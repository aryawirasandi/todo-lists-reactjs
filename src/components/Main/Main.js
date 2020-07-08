import React from 'react';
import Container from "@material-ui/core/Container"
import FormTodo from "../Form/Form";
import Todo from "../Todo/Todo";

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

const Main = () => {
    return (
        <main>
            <Container>
                <Router>
                <Switch>
                    <Route path="/">
                        <Default/>
                    </Route>
                    <Route path="todo">
                        <Todo heading="Learning react JS"
                              description="Learning react JS with OSA at discord"
                        />
                    </Route>
                    <Route path="create">
                        <FormTodo/>
                    </Route>
                </Switch>
                </Router>
            </Container>
        </main>
    )
}


function Default(){
    return <h2>This is Default</h2>
}

export default Main;