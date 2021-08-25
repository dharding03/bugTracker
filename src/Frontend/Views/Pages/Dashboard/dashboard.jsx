import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Card from "../../Components/Dashboard/card";
import {getBugs} from "../../../Controllers/Redux/bugReducer";

function Dashboard() {

    const dispatch = useDispatch();
    const bugs = useSelector(state => state.bugs);
    const browserHistory = useHistory();

    let highCount = 0
    let midCount = 0
    let lowCount = 0
    if(bugs != undefined) {
        highCount = filterbugs(1);
        midCount = filterbugs(2);
        lowCount = filterbugs(3);
    }

    function redirect() {
        browserHistory.push("/viewbugs")
    }

    function filterbugs(priority) {
        return bugs.filter((bug) => {
            return bug.priority == priority
        })
    }

    useEffect(() => {
        dispatch(getBugs())
    }, [bugs == undefined])

    return(
        <div className= "pageContainer">
        <Card priority= "1" count= {highCount.length} clicked={redirect}/>
            <Card priority= "2" count= {midCount.length} clicked={redirect} />
            <Card priority= "3" count= {lowCount.length} clicked={redirect} />
        </div>
    )
}

export default Dashboard