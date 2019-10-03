import React from "react";
import ReactDOM from "react-dom";
import styles from "./NavigationWidget.css";
import NavigationItem from "./NavigationItem";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";
import ReactHoverObserver from "react-hover-observer";

class NavigationWidget extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <List>
          {this.props.lists.map(list => (
            <NavLink
              key={list.id}
              to={"/list/" + list.id}
              activeClassName={styles.active}
              style={{ textDecoration: "none" }}
            >
              {/* <ReactHoverObserver> */}
              <NavigationItem key={list.id} list={list} />
              {/* </ReactHoverObserver> */}
            </NavLink>
          ))}
        </List>
      </div>
    );
  }
}

NavigationWidget.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // Nothing for the moment
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(NavigationWidget);
