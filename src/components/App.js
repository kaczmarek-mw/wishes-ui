import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css"
import Navigation from "./Navigation/Navigation";
import Main from "./Main/Main";
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

class App extends React.Component {

    render() {
        return (
            <Paper className={styles.container}>
                <CssBaseline />
                <div className={styles.navigation}>
                    <Navigation/>
                </div>
                <div className={styles.main}>
                    <Main />
                </div>
            </Paper>
        );
    }
}

export default App;