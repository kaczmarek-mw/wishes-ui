import React from "react";
import ReactDOM from "react-dom";
import styles from "./Main.css"
import Toolbar from "./Toolbar/Toolbar"
import ShoppingList from "./ShoppingList/ShoppingList"
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 'list': {} };
    }

    getCurrentList() {
            const list = this.props.lists.find((list) => {
            return this.props.match.params.id == list.id;
        });
        return list;
    }

    render() {
        console.log(`Render props id is ${this.props.match.params.id}`);
        const list = this.getCurrentList();
        return (
            <div className={styles.container}>
                <div className={styles.toolbar}>
                    <Toolbar />
                </div>
                <div className={styles.shopping_list}>
                    <ShoppingList list={list} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch, state) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
