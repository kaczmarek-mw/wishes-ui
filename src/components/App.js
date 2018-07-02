import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css"
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import MainEmpty from "./MainEmpty/MainEmpty";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <Router>
                <Paper className={styles.container}>
                    <CssBaseline />
                    <div className={styles.navigation}>
                        <Navigation/>
                    </div>
                    <div className={styles.main}>
                        <Switch>
                            <Route exact path="/" component={MainEmpty}/>
                            <Route exact path="/list/:id" component={Main}/>
                        </Switch>
                    </div> 
                </Paper>
            </Router>
        );
    }
}

export default App;