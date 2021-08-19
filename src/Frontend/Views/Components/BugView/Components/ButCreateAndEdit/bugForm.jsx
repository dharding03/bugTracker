import React from "react";
import './bugForm.css';

function BugForm(props) {
    return(
        <div className= "bugCreate">
            <h1>{props.title}</h1>
            <form>
                <label>Name:</label>
                <input name= "name" placeholder= "Bug Name" required />
                <label>Details:</label>
                <textarea name= "details" placeholder= "Detailed description of the bug" required />
                <label>Steps:</label>
                <textarea name= "steps" placeholder= "Steps to recreate the bug" required />
                <label>Priority:</label>
                <select name= "priority" required>
                    <option value= "1">High</option>
                    <option value= "2">Mid</option>
                    <option value= "3">Low</option>
                </select>
                <label>Assign:</label>
                <select name= "assigned">
                    <option>Dan Harding</option>
                </select>
                <label>Application Version</label>
                <input name= "version" placeholder= "Application Version" />
                <button type= "submit">{props.title}</button>

            </form>
        </div>
    )
}

export default BugForm;