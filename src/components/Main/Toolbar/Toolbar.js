import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Toolbar.css";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from "@material-ui/core/styles";
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ACTIONS from './../../../store-actions';

const materialStyles = theme => ({
    input: {
        'margin': 'theme.spacing.unit'
    },
    toolbarRoot: {
        'min-height': '48px',
        'display': 'flex',
        'position': 'relative',
        'align-items': 'center',
        'padding': '6px'
    }
});

class Toolbar_ extends React.Component {

    state = {
        anchorEl: null,
    };

    handleMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
    };

    deleteList(list) {
        this.props.onDeleteClicked(list.id);
        this.props.history.push('/');
    };

    render() {
        const { anchorEl } = this.state;
        return (
            <Toolbar
                disableGutters
                classes={{
                    root: this.props.classes.toolbarRoot
                }}
                className={styles.container}>
                <Input fullWidth
                    placeholder="Search"
                    classes={{
                        input: this.props.classes.input
                    }}
                    inputProps={{
                        "aria-label": "Search field"
                    }}
                />
                <IconButton
                    aria-label="More"
                    aria-owns={anchorEl ? 'shopping-toolbar-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenuOpen}>
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="shopping-toolbar-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleMenuClose}
                >
                    <MenuItem onClick={() => this.deleteList(this.props.list)}>
                        <DeleteIcon />
                        <p style={{ 'marginLeft': '10px' }}>Delete this list</p>
                    </MenuItem>
                </Menu>
            </Toolbar>
        );
    }
}

Toolbar_.propTypes = {
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


export default withStyles(materialStyles)(connect(mapStateToProps, mapDispatchToProps)(withRouter(Toolbar_)));
