import React from "react";
import styles from "./NavigationWidget.css";
import NavigationItem from "./NavigationItem";
import PropTypes from "prop-types";
import List from "@material-ui/core/List";
import { NavLink } from "react-router-dom";

class NavigationWidget extends React.Component {
  render() {
    const { lists } = this.props;
    if (!lists) {
      return null;
    }
    return (
      <div className={styles.container}>
        <List>
          {lists.map(list => (
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
  lists: PropTypes.array
};

export default NavigationWidget;
