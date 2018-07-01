import React from "react";
import ReactDOM from "react-dom";
import styles from "./NavigationItem.css"
import PropTypes from 'prop-types';
import ACTIONS from './../../../store-actions';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const materialStyles = theme => ({

});

class NavigationItem extends React.Component {

    deleteList(list) {
        this.props.onDeleteClicked(list.id);
    };

    render() {
        const closeBtn = (this.props.isHovering ?
            (<ListItemSecondaryAction>
                <IconButton aria-label="Close" onClick={() => this.deleteList(this.props.list)}>
                    <ClearIcon />
                </IconButton>
            </ListItemSecondaryAction>) :
            <div></div>
        );

        return (
            <ListItem button className={styles.container}>
                <ListItemText primary={this.props.list.name} />
                {closeBtn}
            </ListItem>

        );
    }
}

NavigationItem.propTypes = {
    classes: PropTypes.object.isRequired,
    list: PropTypes.object.isRequired
};



const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteClicked: (id) => dispatch({
            type: ACTIONS.DELETE_LIST,
            payload: id
        })
    }
}


export default withStyles(materialStyles)(connect(mapStateToProps, mapDispatchToProps)(NavigationItem));