import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Frontend/Views/Pages/Login/Login";
import Sidebar from "./Frontend/Views/Sidebar/Sidebar";
import ViewBugs from "./Frontend/Views/Pages/viewBugs";
import BugForm from "./Frontend/Views/Components/BugView/Components/ButCreateAndEdit/bugForm";

function App() {
    const {auth} = useSelector(state => state)
    return (
        <div>
            <Router>
                {!auth.loggedIn ? <Login/> :
                    <>
                        <Sidebar />
                        <Switch>
                            <Route path="/viewbugs">
                                <ViewBugs/>
                            </Route>
                            <Route path="/createbug"> <div className= "pageContainer">
                                <BugForm title= "Create Bug" /> </div>
                            </Route>
                        </Switch>
                    </>

                }
            </Router>
        </div>
    );
}

export default App;
