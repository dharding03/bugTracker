import React from "react";
import {useSelector} from "react-redux";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./Frontend/Views/Pages/Login/Login";
import Sidebar from "./Frontend/Views/Sidebar/Sidebar";
import ViewBugs from "./Frontend/Views/Pages/viewBugs";
import BugForm from "./Frontend/Views/Components/BugCreateAndEdit/bugForm";
import Dashboard from "./Frontend/Views/Pages/Dashboard/dashboard";

function App() {
    const {auth} = useSelector(state => state)
    return (
        <div>
            <Router>
                {!auth.loggedIn ? <Login/> :
                    <>
                        <Sidebar />
                        <Switch>
                            <Route exact path= "/">
                                <Dashboard />
                            </Route>
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
