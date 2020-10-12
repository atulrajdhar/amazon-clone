export const initialState = {
    basket: [
        {
            id:"1600490069",
            title:"Learning from Data",
            price:3537.00,
            rating:5,
            image:"https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
        },
        {
            id:"1600490069",
            title:"Learning from Data",
            price:3537.00,
            rating:5,
            image:"https://images-na.ssl-images-amazon.com/images/I/41FYZhzwm2L._SX323_BO1,204,203,200_.jpg"
        }
    ],

    user: null,
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };        
        
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            };
        
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in the basket`
                );
            }
            return {
                ...state,
                basket: newBasket,
             };

        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        
        default:
            return state;
    }
}

export default reducer;