import React from "react";
import './editPanel.css';

function EditPanel(props) {
    return(
        <div className= "editPanel">
            <button onClick={props.editClicked}>Edit</button>
            <button onClick={props.deleteClicked}>Delete</button>
        </div>
    )
}

export default EditPanel;