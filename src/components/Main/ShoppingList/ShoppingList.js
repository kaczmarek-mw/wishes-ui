import React from "react";
import ReactDOM from "react-dom";
import styles from "./ShoppingList.css"
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class ShoppingList extends React.Component {

    render() {
        const list = this.props.list;
        return (
            <div className={styles.container}>
                <Typography className={styles.headline} variant="headline" gutterBottom>
                    {list.name}
                </Typography>

                {list.items.map(item => (
                    <div>
                        {item.name}
                    </div>
                ))}

            </div>
        );
    }
}

ShoppingList.propTypes = {
    list: PropTypes.object
};

export default ShoppingList;