import React from "react";
import ReactDOM from "react-dom";
import styles from "./MainEmpty.css"

class MainEmpty extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                Select a list!
            </div>
        );
    }
}

export default MainEmpty;