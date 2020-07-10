import React from 'react';
import Container from "@material-ui/core/Container"
import FormTodo from "../Form/Form";
import Todo from "../Todo/Todo";

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import BottomNavigationComponent from "../BottomNavigation/BottomNavigationComponent";

const Main = () => {
    return (
        <main>
        <Router>
            <Container>
                    <Switch>
                        <Route path="/create">
                            <FormTodo/>
                        </Route>
                        <Route path="/todo">
                            <Todo heading="Learning react JS"
                                  description="Learning react JS with OSA at discord"/>
                        </Route>
                        <Route path="/">
                            <Default/>
                        </Route>
                    </Switch>
            </Container>
            <BottomNavigationComponent/>
        </Router>
        </main>
    )
}


function Default(){
    return <h2>This is Default</h2>
}

export default Main;