import { createStore } from 'redux'
import ACTIONS from './store-actions';

const defaultStore = {
    lists: [
        {
            id: 1,
            name: 'Different stuff',
            items: [
                {
                    id: 1,
                    name: 'Tomatoes',
                    quantity: 3,
                    shop: 'Coop',
                    img: 'https://img.freepik.com/free-vector/fresh-tomato_1053-566.jpg?size=338&ext=jpg',
                    done: false
                },
                {
                    id: 2,
                    name: 'Oranges',
                    quantity: 5,
                    shop: 'Coop',
                    img: 'https://media.gettyimages.com/xc/185284489-orange.jpg?v=1&c=IWSAsset&k=2&d=BF73B9D673DE700B53F833997C4AABE6E1F344576F737648EC5ED9ED630BAEC3&b=OTc=',
                    done: true
                },
                {
                    id: 3,
                    name: 'Bread',
                    quantity: 1,
                    shop: 'Migros',
                    img: 'http://www.ndtv.com/cooks/images/kasha-bread.jpg',
                    done: false
                },
                {
                    id: 4,
                    name: 'Chips',
                    quantity: 1,
                    shop: 'Denner',
                    img: 'https://img.coopathome.ch/produkte/300_300/RGB/3153257_001.jpg?_=1521110196563',
                    done: false
                }
            ]
        },
        {
            id: 2,
            name: 'Migros list',
            items: []
        },
        {
            id: 3,
            name: 'Denner list',
            items: []
        }
    ]
}

const shopsterReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case ACTIONS.DELETE_LIST:
            return {
                lists: state.lists.filter(list => action.payload != list.id)
            }
        case ACTIONS.TOGGLE_DONE:
            return {
                lists: state.lists.map(list => {
                    if (list.id == action.payload.list.id) {
                        return {
                            ...list,
                            items: list.items.map(item => {
                                if (item.id == action.payload.item.id) {
                                    return {
                                        ...item,
                                        done: item.done ? false : true
                                    }
                                } else {
                                    return item;
                                }
                            })
                        };
                    } else {
                        return list;
                    }
                })
            }
        default:
            {
                return state;
            }
    }
}

const store = createStore(shopsterReducer);

export default store;