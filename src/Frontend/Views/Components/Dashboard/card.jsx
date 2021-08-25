import React from "react";
import './card.css';
import Priority from '../../../Controllers/priorityController';

function Card(props) {

    const {level, color} = Priority(props.priority);

    return(
        <div className="dashboardCard" onClick={props.clicked} style={{color: color}}>
            <h2>Total: {level}</h2>
            <p>{props.count}</p>
        </div>
    )
}

export default Card;