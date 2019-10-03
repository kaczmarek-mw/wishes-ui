import React from "react";
import ReactDOM from "react-dom";
import styles from "./NavigationItem.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

const materialStyles = theme => ({
  listItemTextRoot: {
    padding: "0 5px"
  },
  ListItemRoot: {
    padding: "10px 5px 10px 10px"
  },
  iconDone: {
    color: "green"
  }
});

class NavigationItem extends React.Component {
  countDone = items => {
    return items.filter(item => {
      return item.done;
    }).length;
  };

  render() {
    // const closeBtn = (this.props.isHovering ?
    //     (<ListItemSecondaryAction>
    //         <IconButton aria-label="Close">
    //             <ClearIcon />
    //         </IconButton>
    //     </ListItemSecondaryAction>) :
    //     <div></div>
    // );

    const { list, classes } = this.props;
    const isDone =
      this.countDone(list.items) == list.items.length && list.items.length > 0;

    return (
      <ListItem button classes={{ root: classes.ListItemRoot }}>
        <ListItemText
          classes={{ root: classes.listItemTextRoot }}
          primary={list.name}
        />
        {isDone ? <CheckIcon classes={{ root: classes.iconDone }} /> : null}
      </ListItem>
    );
  }
}

NavigationItem.propTypes = {
  classes: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withStyles(materialStyles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavigationItem)
);
