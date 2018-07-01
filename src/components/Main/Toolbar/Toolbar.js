import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Toolbar.css";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";
import { withStyles } from "@material-ui/core/styles";

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
    render() {
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
                        "aria-label": "Description"
                    }}
                />
            </Toolbar>
        );
    }
}

Toolbar_.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(materialStyles)(Toolbar_);
