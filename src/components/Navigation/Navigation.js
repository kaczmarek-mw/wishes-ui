import React from "react";
import ReactDOM from "react-dom";
import styles from "./Navigation.css"
import NavigationItem from "./NavigationItem/NavigationItem"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import {NavLink} from 'react-router-dom';
import ReactHoverObserver from 'react-hover-observer';

const materialStyles = theme => ({
    
});

class Navigation extends React.Component {

   
    render() {
        return (
            <div className={styles.container}>
                <List>
                    {this.props.lists.map(list => (
                        <NavLink key={list.id} to={'/list/' + list.id} activeClassName={styles.active}>
                            <ReactHoverObserver>
                                <NavigationItem list={list} />
                            </ReactHoverObserver>
                        </NavLink>
                    ))}
                </List>
            </div>
        );
    }
    
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        lists: state.lists
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}


export default  withStyles(materialStyles)(connect(mapStateToProps, mapDispatchToProps) (Navigation));