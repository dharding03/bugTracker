import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getBugs} from '../../Controllers/Redux/bugReducer';
import BugCard from "../Components/BugCard/bugCard";
import BugView from "../Components/BugView/bugView";

function ViewBugs() {
    const dispatch = useDispatch();
    const {bugs} = useSelector(state => state);
    const [displayBug, setDisplayBug] = useState({
        name: "",
        isDisplayed: false
    })

    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1])

    function BugClicked(name) {
        setDisplayBug({
            isDisplayed: !displayBug.isDisplayed,
            name: name
        })
    }

    return(
        <div className= "pageContainer">
            {bugs.map((bug, key) => (
                <BugCard key={key} bug={bug}  clicked={BugClicked}/>
            ))}
            {displayBug.isDisplayed && <BugView clicked={BugClicked} bug={bugs.filter((bug) => bug.name == displayBug.name)[0]} />}
        </div>
    )
}

export default ViewBugs;