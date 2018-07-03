import React from "react";
import ReactDOM from "react-dom";
import styles from "./MainEmpty.css"
import cart from './../../../img/bag250.png';

class MainEmpty extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                <img src={cart} />
            </div>
        );
    }
}

export default MainEmpty;