import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css";
import NavigationWidget from "./Navigation/NavigationWidget";
import WishListWidget from "./WishList/WishListWidget";
import EmptyWidget from "./Empty/EmptyWidget";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Paper className={styles.container}>
          <CssBaseline />
          <div className={styles.navigation}>
            <NavigationWidget />
          </div>
          <div className={styles.main}>
            <Switch>
              <Route exact path="/" component={EmptyWidget} />
              <Route exact path="/list/:id" component={WishListWidget} />
            </Switch>
          </div>
        </Paper>
      </Router>
    );
  }
}

export default App;
