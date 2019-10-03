import React from "react";
import ReactDOM from "react-dom";
import styles from "./NewWish.css";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import { connect } from "react-redux";
import ACTIONS from "../../store-actions";

const materialStyles = theme => ({
  inputRoot: {
    marginLeft: "5px",
    marginRight: "5px"
  },
  inputInput: {
    width: "50%",
    minWidth: "50px"
  },
  inputInputCnt: {
    width: 40,
    minWidth: 40
  },
  buttonRoot: {
    minWidth: 40,
    padding: 5,
    marginRight: 4
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class NewWish extends React.Component {
  state = {
    name: "",
    quantity: 1,
    shop: "",
    img: ""
  };

  handleAdd() {
    this.props.newItem(this.props.list, {
      name: this.state.name,
      quantity: this.state.quantity,
      shop: this.state.shop,
      img: this.state.img,
      done: false
    });
    this.setState({ ...this.state, name: "", quantity: 1 });
  }

  render() {
    const { list, classes } = this.props;
    return (
      <form
        onKeyUp={event => {
          if (event.keyCode == 13) this.handleAdd();
        }}
        className={styles.container}
      >
        <Input
          onChange={event =>
            this.setState({ ...this.state, quantity: event.target.value })
          }
          value={this.state.quantity}
          classes={{ root: classes.inputRoot, input: classes.inputInputCnt }}
          placeholder="#"
        />
        <Input
          onChange={event =>
            this.setState({ ...this.state, name: event.target.value })
          }
          value={this.state.name}
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
          fullWidth
          placeholder="Product"
        />
        <Input
          onChange={event =>
            this.setState({ ...this.state, shop: event.target.value })
          }
          value={this.state.shop}
          classes={{ root: classes.inputRoot, input: classes.inputInput }}
          fullWidth
          placeholder="Shop"
        />

        <input
          onChange={event =>
            this.setState({ ...this.state, img: event.target.value })
          }
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <Button
            variant="outlined"
            className={classes.button}
            component="span"
            classes={{ root: classes.buttonRoot }}
          >
            <PhotoCamera />
          </Button>
        </label>

        <Button
          onClick={() => this.handleAdd()}
          variant="outlined"
          color="primary"
          aria-label="add"
          classes={{ root: classes.buttonRoot }}
        >
          <AddIcon />
        </Button>
      </form>
    );
  }
}

NewWish.propTypes = {
  list: PropTypes.object
};

const mapStateToProps = state => {
  return {
    // Nothing for the moment
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    newItem: (list, item) =>
      dispatch({
        type: ACTIONS.NEW_SHOPPING_ITEM,
        payload: { list, item }
      })
  };
};

export default withStyles(materialStyles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NewWish)
);
