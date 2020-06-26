import { connect } from "react-redux";
import WishListWidget from "./WishListWidget";
import ACTIONS from "../../store-actions";

const mapStateToProps = state => {
  return {
    lists: state.lists
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishListWidget);
