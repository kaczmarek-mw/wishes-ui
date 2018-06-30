import React from "react";
import ReactDOM from "react-dom";
import styles from "./App.css"

class App extends React.Component {

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.navigation}>Navigation</div>
                <div className={styles.shopping_list}>Shopping list</div>
            </div>
        );
    }
    
}

export default App;