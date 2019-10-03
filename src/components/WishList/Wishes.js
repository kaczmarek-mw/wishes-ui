import React from "react";
import ReactDOM from "react-dom";
import styles from "./Wishes.css";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import ACTIONS from "../../store-actions";
import { connect } from "react-redux";

const materialStyles = theme => ({
  summaryRoot: {
    minHeight: "48px!important",
    backgroundColor: "rgba(235, 235, 235, 0.5)"
  },
  summaryExpanded: {
    margin: "0px!important"
  },
  listRoot: {
    width: "100%"
  },
  typographyRoot: {}
});

class ShopItems extends React.Component {
  state = {
    expanded: true
  };

  handleToggle = itemChecked => () => {
    itemChecked.done = itemChecked.done ? false : true;
  };

  toggleExpanded = () => (event, expanded) => {
    this.setState({
      expanded: expanded ? true : false
    });
  };

  countDone = items => {
    return items.filter(item => {
      return item.done;
    }).length;
  };

  render() {
    const { expanded } = this.state;
    const { list, shop, items, classes } = this.props;
    const countItemsDone = this.countDone(items);
    return (
      <div className={styles.container}>
        <ExpansionPanel expanded={expanded} onChange={this.toggleExpanded()}>
          <ExpansionPanelSummary
            classes={{
              root: classes.summaryRoot,
              expanded: classes.summaryExpanded
            }}
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography
              classes={{
                root: classes.typographyRoot
              }}
              style={{ color: countItemsDone == items.length ? "gray" : "" }}
              variant="subheading"
            >
              {shop} ({countItemsDone}/{items.length})
            </Typography>
          </ExpansionPanelSummary>
          <Divider></Divider>
          <ExpansionPanelDetails>
            <List
              classes={{
                root: classes.listRoot
              }}
            >
              {items.map(item => (
                <ListItem
                  key={item.id}
                  dense
                  button
                  className={classes.listItem}
                >
                  <Avatar src={item.img} />
                  <ListItemText primary={`${item.quantity} ${item.name}`} />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onChange={() => this.props.toggleDone(list, item)}
                      checked={item.done}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

ShopItems.propTypes = {
  shop: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  list: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    // Nothing for the moment
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleDone: (list, item) =>
      dispatch({
        type: ACTIONS.TOGGLE_DONE,
        payload: { list, item }
      })
  };
};

export default withStyles(materialStyles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ShopItems)
);
