import React from "react";
import ReactDOM from "react-dom";
import styles from "./NewItemInput.css"
import PropTypes from 'prop-types';
import Input from "@material-ui/core/Input";
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const materialStyles = theme => ({
    inputRoot: {
        marginLeft: '5px',
        marginRight: '5px'
    },
    inputInput: {
        width: '50%',
        minWidth: '50px'
    },
    inputInputCnt: {
        width: 40,
        minWidth: 40
    },  
    button: {
        margin: 0,
        padding: 0
    },
    buttonRoot: {
        minWidth: 40,
        padding: 5,
        marginRight: 4
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


class NewItemInput extends React.Component {
    
    render() {
        const { list, classes } = this.props;
        return (
            <div className={styles.container}>
                <Input classes={{root: classes.inputRoot, input: classes.inputInputCnt}} placeholder="#"/>
                <Input classes={{root: classes.inputRoot, input: classes.inputInput}} fullWidth placeholder="Product"/>
                <Input classes={{root: classes.inputRoot, input: classes.inputInput}} fullWidth placeholder="Shop"/>

                <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                <label htmlFor="icon-button-file">
                    <Button variant="outlined" className={classes.button} component="span"
                        classes={{button: classes.button, root: classes.buttonRoot}}>
                        <PhotoCamera />
                    </Button>
                </label>

                <Button variant="outlined" color="primary" aria-label="add" 
                    classes={{button: classes.button, root: classes.buttonRoot}}>
                    <AddIcon />
                </Button>
            </div>
        );
    }
}

NewItemInput.propTypes = {
    list: PropTypes.object
};

export default withStyles(materialStyles) (NewItemInput);