import React from "react";
import ReactDOM from "react-dom";
import styles from "./ShoppingList.css"
import PropTypes from 'prop-types';

class ShoppingList extends React.Component {

    render() {
        return (
            <div className={styles.container}>
                {this.props.list.name}
            </div>
        );
    }
}

ShoppingList.propTypes = {
    list: PropTypes.object.isRequired,
};

export default ShoppingList;