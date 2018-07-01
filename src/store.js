import { createStore } from 'redux'
import uuid from 'uuid';
import ACTIONS from './store-actions';

const defaultStore = {
    lists: [
        {
            id: uuid(),
            name: 'Coop list'
        },
        {
            id: uuid(),
            name: 'Migros list'
        },
        {
            id: uuid(),
            name: 'Denner list'
        }
    ]
}

const shopsterReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case ACTIONS.DELETE_LIST:
            return {
                lists: state.lists.filter(list => action.payload != list.id)
            }
        default:
            {
                return state;
            }
    }
}

const store = createStore(shopsterReducer);

export default store;