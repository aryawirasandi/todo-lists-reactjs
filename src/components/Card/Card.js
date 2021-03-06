import React from 'react';
import Card from "@material-ui/core/Card";

const CardComponent = props => {
    return (
        <Card>
            {props.children}
        </Card>
    )
}

export default CardComponent;