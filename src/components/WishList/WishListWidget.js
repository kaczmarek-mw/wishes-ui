import React from "react";
import styles from "./WishListWidget.css";
import Header from "./Header";
import Wishes from "./Wishes";
import NewWish from "./NewWish";
import Divider from "@material-ui/core/Divider";

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
    const { toggleDone } = this.props;
    return (
      <div className={styles.container}>
        <Divider />
        <NewWish list={list}></NewWish>
        <Divider />
        <div className={styles.scrollContainer}>
          {Object.keys(grouped).map(shop => (
            <Wishes
              toggleDone={toggleDone}
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

export default WishListWidget;
