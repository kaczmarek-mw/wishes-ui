import React from "react";
import ReactDOM from "react-dom";
import styles from "./WishListWidget.css";
import Header from "./Header";
import Paper from "@material-ui/core/Paper";
import ShopItems from "./Wishes";
import NewWish from "./NewWish";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";

class WishListWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = { list: {} };
  }

  groupBy = (array, groupBy) => {
    return array.reduce((grouped, element) => {
      (grouped[element[groupBy]] = grouped[element[groupBy]] || []).push(
        element
      );
      return grouped;
    }, {});
  };

  getCurrentList() {
    const list = this.props.lists.find(list => {
      return this.props.match.params.id == list.id;
    });
    return list;
  }

  renderWishes(list) {
    const grouped = this.groupBy(list.items, "shop");
    return (
      <div className={styles.container}>
        <Divider />
        <NewWish list={list}></NewWish>
        <Divider />
        <div className={styles.scrollContainer}>
          {Object.keys(grouped).map(shop => (
            <ShopItems
              key={shop}
              list={list}
              shop={shop}
              items={grouped[shop]}
            />
          ))}
        </div>
      </div>
    );
  }

  render() {
    const list = this.getCurrentList();
    return (
      <div className={styles.container}>
        <div className={styles.toolbar}>
          <Header list={list} />
        </div>
        <div className={styles.shopping_list}>{this.renderWishes(list)}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists
  };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    // Nothing for the moment
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishListWidget);
