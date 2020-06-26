import { connect } from "react-redux";
import NavigationWidget from "./NavigationWidget";

const mapStateToProps = state => ({
  lists: state.lists
});

const mapDispatchToProps = dispatch => {
  return {
    // Nothing for the moment
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationWidget);
