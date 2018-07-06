import React from "react";
import ReactDOM from "react-dom";
import styles from "./ShoppingList.css"
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ShopItems from './ShopItems/ShopItems';
import NewItemInput from './NewItemInput/NewItemInput';
import Divider from '@material-ui/core/Divider';

class ShoppingList extends React.Component {

    groupBy = (array, groupBy) => {
        return array.reduce((grouped, element) => {
            (grouped[element[groupBy]] = grouped[element[groupBy]] || []).push(element);
            return grouped;
        }, {});
    };

    render() {
        const list = this.props.list;
        const grouped = this.groupBy(list.items, 'shop');
        return (
            <div className={styles.container}>
                <Divider />
                <Typography className={styles.headline} variant="headline">
                    {list.name}
                </Typography>
                <NewItemInput list={list}></NewItemInput>
                <Divider />
                <div className={styles.scrollContainer}>
                    {Object.keys(grouped).map(shop => (
                        <ShopItems key={shop} list={list} shop={shop} items={grouped[shop]} />
                    ))}
                </div>
            </div>
        );
    }
}

ShoppingList.propTypes = {
    list: PropTypes.object
};

export default ShoppingList;