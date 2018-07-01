import React from "react";
import ReactDOM from "react-dom";
import styles from "./Main.css"
import Toolbar from "./Toolbar/Toolbar"
import ShoppingList from "./ShoppingList/ShoppingList"
import Paper from '@material-ui/core/Paper';

class Main extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.toolbar}>
                    <Toolbar />
                </div>
                <div className={styles.shopping_list}>
                    <ShoppingList />
                </div>
            </div>
        );
    }
}

export default Main;