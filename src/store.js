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
                    img: 'https://www.google.ch/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Ffresh-tomato_1053-566.jpg%3Fsize%3D338%26ext%3Djpg&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Ftomato&docid=4zI2rwisrWBxUM&tbnid=FFLrFZIx3y6zWM%3A&vet=10ahUKEwj9rK6sm4PcAhViJ5oKHSpWApkQMwiiAigMMAw..i&w=338&h=338&bih=987&biw=1920&q=tomato&ved=0ahUKEwj9rK6sm4PcAhViJ5oKHSpWApkQMwiiAigMMAw&iact=mrc&uact=8'
                },
                {
                    id: 2,
                    name: 'Oranges',
                    quantity: 5,
                    shop: 'Coop',
                    img: 'https://www.google.ch/imgres?imgurl=https%3A%2F%2Fmedia.gettyimages.com%2Fxc%2F185284489-orange.jpg%3Fv%3D1%26c%3DIWSAsset%26k%3D2%26d%3DBF73B9D673DE700B53F833997C4AABE6E1F344576F737648EC5ED9ED630BAEC3%26b%3DOTc%3D&imgrefurl=https%3A%2F%2Fwww.photos.com%2Fphoto%2Forange-id185284489&docid=bLaVILVKqKvldM&tbnid=aJkZiN4tO0KVfM%3A&vet=10ahUKEwiAufLem4PcAhUlxKYKHSx8CxUQMwiGAigFMAU..i&w=432&h=398&bih=987&biw=1920&q=orange&ved=0ahUKEwiAufLem4PcAhUlxKYKHSx8CxUQMwiGAigFMAU&iact=mrc&uact=8'
                },
                {
                    id: 3,
                    name: 'Bread',
                    quantity: 1,
                    shop: 'Migros',
                    img: null
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
        default:
            {
                return state;
            }
    }
}

const store = createStore(shopsterReducer);

export default store;