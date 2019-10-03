import React from "react";
import ReactDOM from "react-dom";
import styles from "./EmptyWidget.css";
import cart from "./../../../img/bag250.png";

class EmptyWidget extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <img src={cart} />
      </div>
    );
  }
}

export default EmptyWidget;
