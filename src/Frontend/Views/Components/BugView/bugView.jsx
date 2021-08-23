import React, {useState} from "react";
import BugViewSection from "./Components/bugViewSection";
import './bugView.css';
import Bug from '../../../Models/Bug';
import {useDispatch} from "react-redux";
import {markComplete} from '../../../Controllers/Redux/bugReducer';
import EditPanel from "../EditAndDelete/editPanel";
import EditBug from "../BugCreateAndEdit/bugForm";

function BugView(props) {

    const dispatch = useDispatch();
    const bug = new Bug(props.bug)
    const [displayEdit, setDisplayEdit] = useState(false);

    function editClicked() {
        setDisplayEdit(!displayEdit)
    }

    function deleteClicked() {

    }

    return (
        <div className="bugView">
            <EditPanel editClicked={editClicked()} deleteClicked={deleteClicked()}/>
            <button className="close-btn" onClick={props.clicked}>Close</button>
            <h1>{bug.name}</h1>
            <BugViewSection title="Details" info={bug.details}/>
            <BugViewSection title="Steps" info={bug.steps}/>
            <BugViewSection title="Priority" info={bug.priority}/>
            <BugViewSection title="App Version" info={bug.version}/>
            <BugViewSection title="Time Created" info={bug.time}/>
            <button onClick={() => {
                dispatch(markComplete())
            }}>Mark Complete
            </button>
            {displayEdit && <EditBug title="Edit Bug" bug={bug} close={editClicked()}/>}
        </div>

    )
}

export default BugView;